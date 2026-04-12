#!/usr/bin/env bash
set -euo pipefail
svc="$1"
cat > "services/$svc/package.json" <<JSON
{
  "name": "@rh/$svc",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "dev": "tsx watch src/index.ts",
    "start": "node dist/index.js",
    "typecheck": "tsc -p tsconfig.json --noEmit",
    "lint": "echo 'lint: $svc'",
    "test": "echo 'test: $svc'"
  },
  "dependencies": {
    "@rh/config-kit": "workspace:*",
    "@rh/service-runtime": "workspace:*"
  }
}
JSON

cat > "services/$svc/tsconfig.json" <<JSON
{
  "extends": "../../tsconfig.base.json",
  "include": ["src/**/*.ts"],
  "references": [
    { "path": "../../packages/config-kit" },
    { "path": "../../packages/service-runtime" }
  ]
}
JSON

cat > "services/$svc/src/index.ts" <<TS
import { loadConfig } from "@rh/config-kit";
import { createServiceRuntime } from "@rh/service-runtime";

const config = loadConfig({
  ...process.env,
  SERVICE_NAME: process.env.SERVICE_NAME ?? "$svc"
});

const app = await createServiceRuntime({
  serviceName: config.SERVICE_NAME,
  logLevel: config.LOG_LEVEL
});

app.get("/v1/info", async () => ({
  service: config.SERVICE_NAME,
  boundedContext: "$svc",
  phase: "phase0-foundation"
}));

await app.listen({ host: "0.0.0.0", port: config.PORT });
TS
