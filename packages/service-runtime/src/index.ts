import cors from "@fastify/cors";
import Fastify, { FastifyInstance } from "fastify";

export interface RuntimeOptions {
  serviceName: string;
  logLevel?: string;
}

export async function createServiceRuntime(options: RuntimeOptions): Promise<FastifyInstance> {
  const app = Fastify({ logger: { level: options.logLevel ?? "info" } });
  await app.register(cors, { origin: true });

  app.get("/health", async () => ({ status: "ok", service: options.serviceName }));
  app.get("/metrics", async () => `service_up{service=\"${options.serviceName}\"} 1`);

  return app;
}
