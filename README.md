# Russian House Universal Event Platform

Production-minded monorepo baseline for a reusable event platform, optimized for the first team-centric quest event: **"Дом, где живёт Россия"**.

## Repository Layout

- `apps/` – user-facing applications (`web`, `admin`, `mobile-bff`)
- `services/` – bounded-context backend services
- `packages/` – shared runtime, config, contracts, and test kits
- `contracts/` – OpenAPI and AsyncAPI definitions
- `infra/` – docker-compose and SQL bootstrap
- `docs/` – architecture, runbooks, QA, release artifacts
- `scripts/` – helper scripts

## Quick Start

```bash
./scripts/bootstrap-env.sh
pnpm install
pnpm compose:up
pnpm --filter @rh/api-gateway dev
```

## Invariants Already Modeled in Foundations

- Team-centric event mode support (`TEAM`, `INDIVIDUAL`, `HYBRID`) via shared types.
- Rich checkpoint status model (`not_started`, `in_progress`, `completed`, `blocked`, `needs_review`).
- Event-driven domain event envelope and topic naming baseline.
- Service boundary discipline with schema-per-service SQL bootstrap.

## Next Implementation Slice

Phase 1 implementation introduces identity, tenant, and access services with strict RBAC and transactional audit outbox for critical actions.
