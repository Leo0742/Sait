import { randomUUID } from "node:crypto";
import { Pool } from "pg";
import { AccountRecord, AuthChallengeRecord, AuthRepository, SessionRecord } from "./types.js";

function toChallengeRecord(row: Record<string, unknown>): AuthChallengeRecord {
  return {
    id: row.id as string,
    email: row.email as string,
    codeHash: row.code_hash as string,
    expiresAt: row.expires_at as Date,
    consumedAt: (row.consumed_at as Date | null) ?? null,
    createdAt: row.created_at as Date
  };
}

function toAccountRecord(row: Record<string, unknown>): AccountRecord {
  return {
    id: row.id as string,
    email: row.email as string,
    createdAt: row.created_at as Date
  };
}

function toSessionRecord(row: Record<string, unknown>): SessionRecord {
  return {
    id: row.id as string,
    accountId: row.account_id as string,
    personId: row.person_id as string,
    refreshTokenHash: row.refresh_token_hash as string,
    expiresAt: row.expires_at as Date,
    revokedAt: (row.revoked_at as Date | null) ?? null,
    createdAt: row.created_at as Date
  };
}

export class PgAuthRepository implements AuthRepository {
  constructor(private readonly db: Pool) {}

  async createChallenge(email: string, codeHash: string, expiresAt: Date): Promise<AuthChallengeRecord> {
    const id = randomUUID();
    const { rows } = await this.db.query(
      `INSERT INTO auth_service.auth_challenges (id, email, code_hash, expires_at)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, code_hash, expires_at, consumed_at, created_at`,
      [id, email, codeHash, expiresAt]
    );
    return toChallengeRecord(rows[0]);
  }

  async getChallenge(challengeId: string): Promise<AuthChallengeRecord | null> {
    const { rows } = await this.db.query(
      `SELECT id, email, code_hash, expires_at, consumed_at, created_at
       FROM auth_service.auth_challenges WHERE id = $1`,
      [challengeId]
    );
    return rows[0] ? toChallengeRecord(rows[0]) : null;
  }

  async consumeChallenge(challengeId: string): Promise<void> {
    await this.db.query(
      `UPDATE auth_service.auth_challenges SET consumed_at = now() WHERE id = $1 AND consumed_at IS NULL`,
      [challengeId]
    );
  }

  async findAccountByEmail(email: string): Promise<AccountRecord | null> {
    const { rows } = await this.db.query(
      `SELECT id, email, created_at FROM auth_service.accounts WHERE email = $1`,
      [email]
    );
    return rows[0] ? toAccountRecord(rows[0]) : null;
  }

  async createAccount(email: string): Promise<AccountRecord> {
    const id = randomUUID();
    const { rows } = await this.db.query(
      `INSERT INTO auth_service.accounts (id, email)
       VALUES ($1, $2)
       ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
       RETURNING id, email, created_at`,
      [id, email]
    );

    return toAccountRecord(rows[0]);
  }

  async createSession(input: {
    accountId: string;
    personId: string;
    refreshTokenHash: string;
    expiresAt: Date;
  }): Promise<SessionRecord> {
    const id = randomUUID();
    const { rows } = await this.db.query(
      `INSERT INTO auth_service.sessions (id, account_id, person_id, refresh_token_hash, expires_at)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, account_id, person_id, refresh_token_hash, expires_at, revoked_at, created_at`,
      [id, input.accountId, input.personId, input.refreshTokenHash, input.expiresAt]
    );
    return toSessionRecord(rows[0]);
  }

  async findSessionById(sessionId: string): Promise<SessionRecord | null> {
    const { rows } = await this.db.query(
      `SELECT id, account_id, person_id, refresh_token_hash, expires_at, revoked_at, created_at
       FROM auth_service.sessions WHERE id = $1`,
      [sessionId]
    );
    return rows[0] ? toSessionRecord(rows[0]) : null;
  }

  async revokeSession(sessionId: string): Promise<void> {
    await this.db.query(`UPDATE auth_service.sessions SET revoked_at = now() WHERE id = $1`, [sessionId]);
  }
}
