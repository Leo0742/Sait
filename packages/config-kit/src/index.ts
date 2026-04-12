import { z } from "zod";

const BaseConfigSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  SERVICE_NAME: z.string().min(1),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  KAFKA_BROKERS: z.string().default("localhost:9092"),
  AI_ENABLED: z.coerce.boolean().default(false)
});

export type ServiceConfig = z.infer<typeof BaseConfigSchema>;

export function loadConfig(env: NodeJS.ProcessEnv): ServiceConfig {
  return BaseConfigSchema.parse(env);
}
