import { loadConfig } from "@rh/config-kit";
import { createServiceRuntime } from "@rh/service-runtime";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "search-index-service"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

app.get("/v1/info", async () => ({
  service: config.SERVICE_NAME,
  boundedContext: "search-index-service",
  phase: "phase0-foundation"
}));

await app.listen({ host: "0.0.0.0", port: config.PORT });
