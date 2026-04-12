import cors from "@fastify/cors";
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Pool } from "pg";
import jwt from "jsonwebtoken";

export interface RuntimeOptions {
  serviceName: string;
  logLevel?: string;
}

export interface AuthenticatedUser {
  accountId: string;
  personId: string;
  email: string;
  sessionId: string;
}

export async function createServiceRuntime(options: RuntimeOptions): Promise<FastifyInstance> {
  const app = Fastify({ logger: { level: options.logLevel ?? "info" } });
  await app.register(cors, { origin: true });

  app.get("/health", async () => ({ status: "ok", service: options.serviceName }));
  app.get("/metrics", async () => `service_up{service=\"${options.serviceName}\"} 1`);

  return app;
}

export function createDbPool(databaseUrl: string): Pool {
  return new Pool({ connectionString: databaseUrl });
}

export function requireBearerToken(request: FastifyRequest): string {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("Missing bearer token");
  }
  return authHeader.slice("Bearer ".length).trim();
}

export function verifyAccessToken(token: string, secret: string): AuthenticatedUser {
  const payload = jwt.verify(token, secret) as jwt.JwtPayload;
  const accountId = payload.sub;
  if (!accountId || typeof accountId !== "string") {
    throw new Error("Invalid access token subject");
  }

  if (typeof payload.personId !== "string" || typeof payload.email !== "string" || typeof payload.sessionId !== "string") {
    throw new Error("Invalid access token payload");
  }

  return {
    accountId,
    personId: payload.personId,
    email: payload.email,
    sessionId: payload.sessionId
  };
}

export function sendValidationError(reply: FastifyReply, message: string) {
  return reply.code(400).send({ error: "validation_error", message });
}
