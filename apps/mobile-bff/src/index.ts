import { loadConfig } from "@rh/config-kit";
import { createServiceRuntime } from "@rh/service-runtime";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "mobile-bff"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

app.get("/v1/mobile/summary", async () => ({
  message: "Mobile BFF baseline for station and volunteer clients"
}));

await app.listen({ host: "0.0.0.0", port: config.PORT });
