import { loadConfig } from "@rh/config-kit";
import {
  createDbPool,
  createServiceRuntime,
  requireBearerToken,
  sendValidationError,
  verifyAccessToken
} from "@rh/service-runtime";
import { RequestAuthChallengeSchema, VerifyAuthChallengeSchema } from "@rh/shared-types";
import { AuthCore } from "./core.js";
import { HttpIdentityClient } from "./identity-client.js";
import { PgAuthRepository } from "./repository.js";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "auth-service"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

const db = createDbPool(config.DATABASE_URL);
const repository = new PgAuthRepository(db);
const identityClient = new HttpIdentityClient(config.IDENTITY_SERVICE_URL);
const core = new AuthCore(repository, identityClient, {
  accessSecret: config.JWT_ACCESS_SECRET,
  refreshSecret: config.JWT_REFRESH_SECRET,
  accessTtlSeconds: config.ACCESS_TOKEN_TTL_SECONDS,
  refreshTtlSeconds: config.REFRESH_TOKEN_TTL_SECONDS,
  otpTtlMinutes: config.OTP_TTL_MINUTES
});

app.post("/v1/auth/challenges", async (request, reply) => {
  const parsed = RequestAuthChallengeSchema.safeParse(request.body);
  if (!parsed.success) {
    return sendValidationError(reply, parsed.error.issues.map((it) => it.message).join(", "));
  }

  const challenge = await core.createChallenge(parsed.data.email);
  return reply.code(201).send(challenge);
});

app.post("/v1/auth/verify", async (request, reply) => {
  const parsed = VerifyAuthChallengeSchema.safeParse(request.body);
  if (!parsed.success) {
    return sendValidationError(reply, parsed.error.issues.map((it) => it.message).join(", "));
  }

  try {
    const tokens = await core.verifyChallenge(parsed.data);
    return reply.send(tokens);
  } catch (error) {
    return reply.code(401).send({ error: "verification_failed", message: (error as Error).message });
  }
});

app.get("/v1/auth/me", async (request, reply) => {
  try {
    const token = requireBearerToken(request);
    const user = verifyAccessToken(token, config.JWT_ACCESS_SECRET);
    return reply.send(user);
  } catch (error) {
    return reply.code(401).send({ error: "unauthorized", message: (error as Error).message });
  }
});

app.post("/v1/auth/refresh", async (request, reply) => {
  const body = request.body as { refreshToken?: string };
  if (!body?.refreshToken) {
    return sendValidationError(reply, "refreshToken is required");
  }

  try {
    const tokens = await core.refreshSession(body.refreshToken);
    return reply.send(tokens);
  } catch (error) {
    return reply.code(401).send({ error: "refresh_failed", message: (error as Error).message });
  }
});

app.post("/v1/auth/logout", async (request, reply) => {
  const body = request.body as { refreshToken?: string };
  if (!body?.refreshToken) {
    return sendValidationError(reply, "refreshToken is required");
  }

  try {
    await core.logout(body.refreshToken);
    return reply.code(204).send();
  } catch (error) {
    return reply.code(401).send({ error: "logout_failed", message: (error as Error).message });
  }
});

await app.listen({ host: "0.0.0.0", port: config.PORT });
