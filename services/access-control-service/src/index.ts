import { loadConfig } from "@rh/config-kit";
import { createDbPool, createServiceRuntime, sendValidationError } from "@rh/service-runtime";
import { EventRoleSchema, GlobalRoleSchema } from "@rh/shared-types";
import { AccessCore } from "./core.js";
import { PgAccessRepository } from "./repository.js";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "access-control-service"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

const db = createDbPool(config.DATABASE_URL);
const repository = new PgAccessRepository(db);
const core = new AccessCore(repository);

app.post("/v1/access/global-roles", async (request, reply) => {
  const body = request.body as { accountId?: string; role?: string };
  if (!body.accountId || !body.role) {
    return sendValidationError(reply, "accountId and role are required");
  }
  const parsedRole = GlobalRoleSchema.safeParse(body.role);
  if (!parsedRole.success) {
    return sendValidationError(reply, parsedRole.error.issues.map((it) => it.message).join(", "));
  }

  await core.assignGlobalRole(body.accountId, parsedRole.data);
  return reply.code(201).send({ ok: true });
});

app.post("/v1/access/event-roles", async (request, reply) => {
  const body = request.body as { accountId?: string; eventId?: string; role?: string; stationId?: string };
  if (!body.accountId || !body.eventId || !body.role) {
    return sendValidationError(reply, "accountId, eventId and role are required");
  }
  const parsedRole = EventRoleSchema.safeParse(body.role);
  if (!parsedRole.success) {
    return sendValidationError(reply, parsedRole.error.issues.map((it) => it.message).join(", "));
  }

  await core.assignEventRole({
    accountId: body.accountId,
    eventId: body.eventId,
    role: parsedRole.data,
    stationId: body.stationId ?? null
  });

  return reply.code(201).send({ ok: true });
});

app.get("/v1/access/resolve", async (request, reply) => {
  const query = request.query as { accountId?: string; eventId?: string };
  if (!query.accountId) {
    return sendValidationError(reply, "accountId is required");
  }
  const resolved = await core.resolvePermissions(query.accountId, query.eventId);
  return reply.send(resolved);
});

app.post("/v1/access/check", async (request, reply) => {
  const body = request.body as { accountId?: string; eventId?: string; permission?: string; stationId?: string };
  if (!body.accountId || !body.permission) {
    return sendValidationError(reply, "accountId and permission are required");
  }

  const result = await core.checkPermission({
    accountId: body.accountId,
    eventId: body.eventId,
    permission: body.permission,
    stationId: body.stationId
  });

  return reply.send(result);
});

await app.listen({ host: "0.0.0.0", port: config.PORT });
