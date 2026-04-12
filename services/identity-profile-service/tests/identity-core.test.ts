import crypto from "node:crypto";
import { describe, expect, it } from "vitest";
import { ProfilePatchSchema } from "@rh/shared-types";
import { IdentityCore } from "../src/core.js";

class FakeIdentityRepository {
  persons = new Map<string, { id: string; email: string; firstName: string | null; lastName: string | null; phone: string | null; birthDate: string | null; createdAt: Date; updatedAt: Date }>();
  accountLinks = new Map<string, string>();

  async findPersonByEmail(email: string) {
    return [...this.persons.values()].find((it) => it.email === email) ?? null;
  }

  async findPersonById(personId: string) {
    return this.persons.get(personId) ?? null;
  }

  async createPerson(email: string) {
    const existing = await this.findPersonByEmail(email);
    if (existing) return existing;
    const person = {
      id: crypto.randomUUID(),
      email,
      firstName: null,
      lastName: null,
      phone: null,
      birthDate: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.persons.set(person.id, person);
    return person;
  }

  async linkAccountToPerson(accountId: string, personId: string) {
    this.accountLinks.set(accountId, personId);
  }

  async findPersonByAccountId(accountId: string) {
    const personId = this.accountLinks.get(accountId);
    if (!personId) return null;
    return this.persons.get(personId) ?? null;
  }

  async updateProfile(personId: string, patch: { firstName?: string; lastName?: string; phone?: string; birthDate?: string }) {
    const existing = this.persons.get(personId);
    if (!existing) throw new Error("person_not_found");
    const updated = {
      ...existing,
      firstName: patch.firstName ?? existing.firstName,
      lastName: patch.lastName ?? existing.lastName,
      phone: patch.phone ?? existing.phone,
      birthDate: patch.birthDate ?? existing.birthDate,
      updatedAt: new Date()
    };
    this.persons.set(personId, updated);
    return updated;
  }
}

describe("identity core", () => {
  it("links account to existing person and avoids duplicates", async () => {
    const repo = new FakeIdentityRepository();
    const core = new IdentityCore(repo as never);

    const first = await core.resolveOrCreatePersonByEmail({ accountId: "acc-1", email: "same@example.com" });
    const second = await core.resolveOrCreatePersonByEmail({ accountId: "acc-2", email: "same@example.com" });

    expect(first.personId).toBe(second.personId);
    expect(repo.persons.size).toBe(1);
  });

  it("updates profile", async () => {
    const repo = new FakeIdentityRepository();
    const core = new IdentityCore(repo as never);
    await core.resolveOrCreatePersonByEmail({ accountId: "acc-1", email: "profile@example.com" });

    const profile = await core.patchProfile("acc-1", { firstName: "Ivan", lastName: "Petrov" });

    expect(profile.firstName).toBe("Ivan");
    expect(profile.lastName).toBe("Petrov");
  });

  it("rejects invalid profile patch", () => {
    const parsed = ProfilePatchSchema.safeParse({ phone: "1" });
    expect(parsed.success).toBe(false);
  });
});
