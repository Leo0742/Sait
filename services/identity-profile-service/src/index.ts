import { loadConfig } from "@rh/config-kit";
import {
  createDbPool,
  createServiceRuntime,
  requireBearerToken,
  sendValidationError,
  verifyAccessToken
} from "@rh/service-runtime";
import { EmailSchema, ProfilePatchSchema } from "@rh/shared-types";
import { IdentityCore } from "./core.js";
import { PgIdentityRepository } from "./repository.js";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "identity-profile-service"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

const db = createDbPool(config.DATABASE_URL);
const repository = new PgIdentityRepository(db);
const core = new IdentityCore(repository);

app.post("/internal/v1/person-link", async (request, reply) => {
  const body = request.body as { accountId?: string; email?: string };
  if (!body.accountId || !body.email) {
    return sendValidationError(reply, "accountId and email are required");
  }

  const email = EmailSchema.safeParse(body.email);
  if (!email.success) {
    return sendValidationError(reply, email.error.issues.map((it) => it.message).join(", "));
  }

  const result = await core.resolveOrCreatePersonByEmail({ accountId: body.accountId, email: email.data });
  return reply.code(201).send(result);
});

app.get("/v1/profile/me", async (request, reply) => {
  try {
    const token = requireBearerToken(request);
    const user = verifyAccessToken(token, config.JWT_ACCESS_SECRET);
    const profile = await core.getProfileByAccount(user.accountId);
    return reply.send(profile);
  } catch (error) {
    return reply.code(401).send({ error: "unauthorized", message: (error as Error).message });
  }
});

app.patch("/v1/profile/me", async (request, reply) => {
  const parsed = ProfilePatchSchema.safeParse(request.body);
  if (!parsed.success) {
    return sendValidationError(reply, parsed.error.issues.map((it) => it.message).join(", "));
  }

  try {
    const token = requireBearerToken(request);
    const user = verifyAccessToken(token, config.JWT_ACCESS_SECRET);
    const updated = await core.patchProfile(user.accountId, parsed.data);
    return reply.send(updated);
  } catch (error) {
    return reply.code(401).send({ error: "unauthorized", message: (error as Error).message });
  }
});

await app.listen({ host: "0.0.0.0", port: config.PORT });
