# Russian House Platform Delivery Plan

## Phase 0 — Foundations
- Monorepo scaffolding with pnpm workspace
- Core packages (`shared-types`, `shared-events`, `service-runtime`, `config-kit`, `observability-kit`, `test-kit`)
- Service skeletons for all required bounded contexts
- Infra baseline (Postgres, Redis, Redpanda)
- OpenAPI/AsyncAPI foundations

## Phase 1 — Identity, tenancy, access
- Auth + account lifecycle
- Person/Profile + consent
- Global/event scoped role assignments
- Policy decision point for RBAC

## Phase 2 — Event lifecycle + public slice
- Event CRUD with settings
- Operational station model
- CMS content ownership boundaries
- Public event catalog/detail APIs

## Phase 3 — Registration + participation
- Event registration synchronous critical path
- Registration moderation
- Participation mode support with event config

## Phase 4 — Team + READY semantics
- Team lifecycle and constraints
- READY lock + controlled composition changes
- Team QR issuance/invalidation

## Phase 5 — Check-in slice
- Team check-in idempotency
- Revoked QR handling
- Manual lookup with audit

## Phase 6 — Checkpoint truth + incidents
- Authoritative checkpoint states
- Stamp/evidence separation
- Incidents + overrides + review workflow

## Phase 7 — Routing and runtime visibility
- Route versioning + wave logic baseline
- Team location/next station visibility
- Manual reassignment controls

## Phase 8 — Results and archive
- Team/event results
- Participant-visible summaries
- Media/archive linkage

## Phase 9 — Telegram baseline
- Role-aware command handling
- Confirmed dangerous actions only

## Phase 10 — AI control plane
- AI provider abstraction and policy scopes
- Emergency disable
- Read-only recommendations to core truth services

## Phase 11 — Hardening
- Replay/reconciliation tooling
- Rehearsal scripts
- Go-live runbooks and SLO checks
