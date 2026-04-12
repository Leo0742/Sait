import { randomUUID } from "node:crypto";
import { Pool } from "pg";
import { ProfilePatchInput } from "@rh/shared-types";

export interface PersonRecord {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  birthDate: string | null;
  createdAt: Date;
  updatedAt: Date;
}

function toPerson(row: Record<string, unknown>): PersonRecord {
  return {
    id: row.id as string,
    email: row.email as string,
    firstName: (row.first_name as string | null) ?? null,
    lastName: (row.last_name as string | null) ?? null,
    phone: (row.phone as string | null) ?? null,
    birthDate: row.birth_date ? String(row.birth_date) : null,
    createdAt: row.created_at as Date,
    updatedAt: row.updated_at as Date
  };
}

export class PgIdentityRepository {
  constructor(private readonly db: Pool) {}

  async findPersonByEmail(email: string): Promise<PersonRecord | null> {
    const { rows } = await this.db.query(
      `SELECT id, email, first_name, last_name, phone, birth_date, created_at, updated_at
       FROM identity_profile_service.persons
       WHERE email = $1`,
      [email]
    );
    return rows[0] ? toPerson(rows[0]) : null;
  }

  async findPersonById(personId: string): Promise<PersonRecord | null> {
    const { rows } = await this.db.query(
      `SELECT id, email, first_name, last_name, phone, birth_date, created_at, updated_at
       FROM identity_profile_service.persons
       WHERE id = $1`,
      [personId]
    );
    return rows[0] ? toPerson(rows[0]) : null;
  }

  async createPerson(email: string): Promise<PersonRecord> {
    const id = randomUUID();
    const { rows } = await this.db.query(
      `INSERT INTO identity_profile_service.persons (id, email)
       VALUES ($1, $2)
       ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
       RETURNING id, email, first_name, last_name, phone, birth_date, created_at, updated_at`,
      [id, email]
    );
    return toPerson(rows[0]);
  }

  async linkAccountToPerson(accountId: string, personId: string): Promise<void> {
    await this.db.query(
      `INSERT INTO identity_profile_service.account_person_links (account_id, person_id)
       VALUES ($1, $2)
       ON CONFLICT (account_id) DO UPDATE SET person_id = EXCLUDED.person_id`,
      [accountId, personId]
    );
  }

  async findPersonByAccountId(accountId: string): Promise<PersonRecord | null> {
    const { rows } = await this.db.query(
      `SELECT p.id, p.email, p.first_name, p.last_name, p.phone, p.birth_date, p.created_at, p.updated_at
       FROM identity_profile_service.persons p
       JOIN identity_profile_service.account_person_links apl ON apl.person_id = p.id
       WHERE apl.account_id = $1`,
      [accountId]
    );
    return rows[0] ? toPerson(rows[0]) : null;
  }

  async updateProfile(personId: string, patch: ProfilePatchInput): Promise<PersonRecord> {
    const existing = await this.findPersonById(personId);
    if (!existing) {
      throw new Error("person_not_found");
    }

    const { rows } = await this.db.query(
      `UPDATE identity_profile_service.persons
       SET first_name = $2,
           last_name = $3,
           phone = $4,
           birth_date = $5,
           updated_at = now()
       WHERE id = $1
       RETURNING id, email, first_name, last_name, phone, birth_date, created_at, updated_at`,
      [
        personId,
        patch.firstName ?? existing.firstName,
        patch.lastName ?? existing.lastName,
        patch.phone ?? existing.phone,
        patch.birthDate ?? existing.birthDate
      ]
    );

    return toPerson(rows[0]);
  }
}
