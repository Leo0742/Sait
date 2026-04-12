import { ProfilePatchInput } from "@rh/shared-types";
import { PgIdentityRepository } from "./repository.js";

export class IdentityCore {
  constructor(private readonly repository: PgIdentityRepository) {}

  async resolveOrCreatePersonByEmail(input: { accountId: string; email: string }): Promise<{ personId: string }> {
    const existingLinked = await this.repository.findPersonByAccountId(input.accountId);
    if (existingLinked) {
      return { personId: existingLinked.id };
    }

    const person = (await this.repository.findPersonByEmail(input.email)) ?? (await this.repository.createPerson(input.email));
    await this.repository.linkAccountToPerson(input.accountId, person.id);
    return { personId: person.id };
  }

  async getProfileByAccount(accountId: string) {
    const person = await this.repository.findPersonByAccountId(accountId);
    if (!person) {
      throw new Error("profile_not_found");
    }

    return {
      personId: person.id,
      email: person.email,
      firstName: person.firstName,
      lastName: person.lastName,
      phone: person.phone,
      birthDate: person.birthDate,
      createdAt: person.createdAt.toISOString(),
      updatedAt: person.updatedAt.toISOString()
    };
  }

  async patchProfile(accountId: string, patch: ProfilePatchInput) {
    const person = await this.repository.findPersonByAccountId(accountId);
    if (!person) {
      throw new Error("profile_not_found");
    }

    const updated = await this.repository.updateProfile(person.id, patch);

    return {
      personId: updated.id,
      email: updated.email,
      firstName: updated.firstName,
      lastName: updated.lastName,
      phone: updated.phone,
      birthDate: updated.birthDate,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString()
    };
  }
}
