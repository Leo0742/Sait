import { z } from "zod";

export const DomainEventEnvelopeSchema = z.object({
  id: z.string().uuid(),
  type: z.string(),
  source: z.string(),
  occurredAt: z.string().datetime(),
  tenantId: z.string(),
  eventId: z.string().optional(),
  payload: z.record(z.string(), z.unknown()),
  metadata: z.record(z.string(), z.string()).default({})
});

export type DomainEventEnvelope = z.infer<typeof DomainEventEnvelopeSchema>;

export const Topics = {
  TeamReady: "team.ready.v1",
  TeamQrInvalidated: "team.qr.invalidated.v1",
  CheckpointStatusChanged: "checkpoint.status.changed.v1",
  IncidentRaised: "incident.raised.v1",
  AuditCriticalAction: "audit.critical_action.v1"
} as const;
