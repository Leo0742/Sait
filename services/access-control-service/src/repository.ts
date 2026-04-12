import { Pool } from "pg";
import { EventRole, EventRoleSchema, GlobalRole, GlobalRoleSchema } from "@rh/shared-types";

export class PgAccessRepository {
  constructor(private readonly db: Pool) {}

  async upsertGlobalRole(accountId: string, role: GlobalRole) {
    await this.db.query(
      `INSERT INTO access_control_service.global_role_assignments (account_id, role)
       VALUES ($1, $2)
       ON CONFLICT (account_id, role) DO NOTHING`,
      [accountId, role]
    );
  }

  async listGlobalRoles(accountId: string): Promise<GlobalRole[]> {
    const { rows } = await this.db.query(
      `SELECT role FROM access_control_service.global_role_assignments WHERE account_id = $1`,
      [accountId]
    );

    return rows.map((row) => GlobalRoleSchema.parse(row.role));
  }

  async upsertEventRole(input: { accountId: string; eventId: string; role: EventRole; stationId?: string | null }) {
    await this.db.query(
      `INSERT INTO access_control_service.event_role_assignments (account_id, event_id, role, station_id)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (account_id, event_id, role, station_id) DO NOTHING`,
      [input.accountId, input.eventId, input.role, input.stationId ?? null]
    );
  }

  async listEventRoles(accountId: string, eventId: string): Promise<Array<{ role: EventRole; stationId: string | null }>> {
    const { rows } = await this.db.query(
      `SELECT role, station_id
       FROM access_control_service.event_role_assignments
       WHERE account_id = $1 AND event_id = $2`,
      [accountId, eventId]
    );

    return rows.map((row) => ({
      role: EventRoleSchema.parse(row.role),
      stationId: (row.station_id as string | null) ?? null
    }));
  }
}
