#!/usr/bin/env bash
set -euo pipefail

cat > .env <<ENV
NODE_ENV=development
PORT=3000
SERVICE_NAME=local-service
LOG_LEVEL=info
DATABASE_URL=postgres://rh:rh@localhost:5432/rh_event
REDIS_URL=redis://localhost:6379
KAFKA_BROKERS=localhost:9092
AI_ENABLED=false
ENV

echo "Created .env baseline"
