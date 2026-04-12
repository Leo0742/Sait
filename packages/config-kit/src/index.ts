import { z } from "zod";

const BaseConfigSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  SERVICE_NAME: z.string().min(1),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  KAFKA_BROKERS: z.string().default("localhost:9092"),
  AI_ENABLED: z.coerce.boolean().default(false),
  JWT_ACCESS_SECRET: z.string().default("dev-access-secret"),
  JWT_REFRESH_SECRET: z.string().default("dev-refresh-secret"),
  ACCESS_TOKEN_TTL_SECONDS: z.coerce.number().int().positive().default(900),
  REFRESH_TOKEN_TTL_SECONDS: z.coerce.number().int().positive().default(604800),
  OTP_TTL_MINUTES: z.coerce.number().int().positive().default(10),
  IDENTITY_SERVICE_URL: z.url().default("http://localhost:3002"),
  AUTH_SERVICE_URL: z.url().default("http://localhost:3001")
});

export type ServiceConfig = z.infer<typeof BaseConfigSchema>;

export function loadConfig(env: NodeJS.ProcessEnv): ServiceConfig {
  return BaseConfigSchema.parse(env);
}
