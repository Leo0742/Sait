import { EventRole, GlobalRole } from "@rh/shared-types";
import { PgAccessRepository } from "./repository.js";

const GlobalPermissions: Record<GlobalRole, string[]> = {
  super_admin: ["*"],
  platform_admin: ["platform.manage", "events.manage", "access.assign"],
  content_manager: ["cms.manage"],
  participant: ["self.read"]
};

const EventPermissions: Record<EventRole, string[]> = {
  event_admin: ["event.manage", "team.manage", "checkin.manage", "incident.manage"],
  volunteer_coordinator: ["volunteer.manage", "station.assign"],
  checkin_operator: ["checkin.execute", "checkin.lookup"],
  station_curator: ["station.manage", "checkpoint.review"],
  station_volunteer: ["checkpoint.stamp.assigned_station"],
  actor: ["actor.read"],
  participant: ["self.read"]
};

export class AccessCore {
  constructor(private readonly repository: PgAccessRepository) {}

  async assignGlobalRole(accountId: string, role: GlobalRole) {
    await this.repository.upsertGlobalRole(accountId, role);
  }

  async assignEventRole(input: { accountId: string; eventId: string; role: EventRole; stationId?: string | null }) {
    await this.repository.upsertEventRole(input);
  }

  async resolvePermissions(accountId: string, eventId?: string) {
    const globalRoles = await this.repository.listGlobalRoles(accountId);
    const eventRoles = eventId ? await this.repository.listEventRoles(accountId, eventId) : [];

    const permissions = new Set<string>();

    for (const role of globalRoles) {
      for (const perm of GlobalPermissions[role]) {
        permissions.add(perm);
      }
    }

    for (const assignment of eventRoles) {
      for (const perm of EventPermissions[assignment.role]) {
        permissions.add(assignment.stationId ? `${perm}:${assignment.stationId}` : perm);
      }
    }

    return {
      accountId,
      eventId: eventId ?? null,
      globalRoles,
      eventRoles,
      permissions: [...permissions]
    };
  }

  async checkPermission(input: { accountId: string; permission: string; eventId?: string; stationId?: string }) {
    const resolved = await this.resolvePermissions(input.accountId, input.eventId);

    const wildcard = resolved.permissions.includes("*");
    if (wildcard) {
      return { allowed: true, reason: "wildcard" };
    }

    if (resolved.permissions.includes(input.permission)) {
      return { allowed: true, reason: "direct" };
    }

    if (input.stationId) {
      const stationScoped = `${input.permission}:${input.stationId}`;
      if (resolved.permissions.includes(stationScoped)) {
        return { allowed: true, reason: "station_scope" };
      }
    }

    return { allowed: false, reason: "missing_permission" };
  }
}
