import { describe, expect, it } from "vitest";
import { AccessCore } from "../src/core.js";

class FakeRepo {
  global = new Map<string, string[]>();
  event = new Map<string, Array<{ role: string; stationId: string | null }>>();

  async upsertGlobalRole(accountId: string, role: string) {
    const current = this.global.get(accountId) ?? [];
    if (!current.includes(role)) current.push(role);
    this.global.set(accountId, current);
  }

  async listGlobalRoles(accountId: string) {
    return (this.global.get(accountId) ?? []) as never;
  }

  async upsertEventRole(input: { accountId: string; eventId: string; role: string; stationId?: string | null }) {
    const key = `${input.accountId}:${input.eventId}`;
    const current = this.event.get(key) ?? [];
    current.push({ role: input.role, stationId: input.stationId ?? null });
    this.event.set(key, current);
  }

  async listEventRoles(accountId: string, eventId: string) {
    return (this.event.get(`${accountId}:${eventId}`) ?? []) as never;
  }
}

describe("access core", () => {
  it("resolves global and event permissions", async () => {
    const repo = new FakeRepo();
    const core = new AccessCore(repo as never);

    await core.assignGlobalRole("acc-1", "platform_admin");
    await core.assignEventRole({ accountId: "acc-1", eventId: "event-1", role: "station_volunteer", stationId: "station-2" });

    const resolved = await core.resolvePermissions("acc-1", "event-1");

    expect(resolved.permissions).toContain("platform.manage");
    expect(resolved.permissions).toContain("checkpoint.stamp.assigned_station:station-2");
  });

  it("denies permission when missing", async () => {
    const repo = new FakeRepo();
    const core = new AccessCore(repo as never);

    const checked = await core.checkPermission({
      accountId: "acc-2",
      permission: "checkin.execute",
      eventId: "event-1"
    });

    expect(checked.allowed).toBe(false);
  });
});
