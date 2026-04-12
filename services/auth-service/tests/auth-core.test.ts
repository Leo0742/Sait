import crypto from "node:crypto";
import { describe, expect, it } from "vitest";
import { AuthCore } from "../src/core.js";
import { AccountRecord, AuthChallengeRecord, AuthRepository, IdentityClient, SessionRecord } from "../src/types.js";

class FakeRepo implements AuthRepository {
  challenges = new Map<string, AuthChallengeRecord>();
  accounts = new Map<string, AccountRecord>();
  sessions = new Map<string, SessionRecord>();

  async createChallenge(email: string, codeHash: string, expiresAt: Date): Promise<AuthChallengeRecord> {
    const id = crypto.randomUUID();
    const challenge: AuthChallengeRecord = { id, email, codeHash, expiresAt, consumedAt: null, createdAt: new Date() };
    this.challenges.set(id, challenge);
    return challenge;
  }

  async getChallenge(challengeId: string): Promise<AuthChallengeRecord | null> {
    return this.challenges.get(challengeId) ?? null;
  }

  async consumeChallenge(challengeId: string): Promise<void> {
    const challenge = this.challenges.get(challengeId);
    if (challenge) {
      challenge.consumedAt = new Date();
    }
  }

  async findAccountByEmail(email: string): Promise<AccountRecord | null> {
    return [...this.accounts.values()].find((it) => it.email === email) ?? null;
  }

  async createAccount(email: string): Promise<AccountRecord> {
    const existing = [...this.accounts.values()].find((it) => it.email === email);
    if (existing) {
      return existing;
    }
    const account: AccountRecord = { id: crypto.randomUUID(), email, createdAt: new Date() };
    this.accounts.set(account.id, account);
    return account;
  }

  async createSession(input: {
    accountId: string;
    personId: string;
    refreshTokenHash: string;
    expiresAt: Date;
  }): Promise<SessionRecord> {
    const session: SessionRecord = {
      id: crypto.randomUUID(),
      accountId: input.accountId,
      personId: input.personId,
      refreshTokenHash: input.refreshTokenHash,
      expiresAt: input.expiresAt,
      revokedAt: null,
      createdAt: new Date()
    };
    this.sessions.set(session.id, session);
    return session;
  }

  async findSessionById(sessionId: string): Promise<SessionRecord | null> {
    return this.sessions.get(sessionId) ?? null;
  }

  async revokeSession(sessionId: string): Promise<void> {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.revokedAt = new Date();
    }
  }
}

class FakeIdentityClient implements IdentityClient {
  byEmail = new Map<string, string>();

  async resolveOrCreatePersonByEmail(input: { accountId: string; email: string }): Promise<{ personId: string }> {
    const existing = this.byEmail.get(input.email);
    if (existing) {
      return { personId: existing };
    }
    const personId = crypto.randomUUID();
    this.byEmail.set(input.email, personId);
    return { personId };
  }
}

function createCore(repo: FakeRepo, identityClient: FakeIdentityClient) {
  return new AuthCore(repo, identityClient, {
    accessSecret: "access",
    refreshSecret: "refresh",
    accessTtlSeconds: 900,
    refreshTtlSeconds: 60 * 60,
    otpTtlMinutes: 10
  });
}

describe("auth core", () => {
  it("creates challenge", async () => {
    const repo = new FakeRepo();
    const identity = new FakeIdentityClient();
    const core = createCore(repo, identity);

    const challenge = await core.createChallenge("test@example.com");

    expect(challenge.challengeId).toBeTruthy();
    expect(challenge.devCode).toHaveLength(6);
    expect(repo.challenges.size).toBe(1);
  });

  it("verifies code and creates account/person linkage", async () => {
    const repo = new FakeRepo();
    const identity = new FakeIdentityClient();
    const core = createCore(repo, identity);

    const challenge = await core.createChallenge("same@example.com");
    const tokens = await core.verifyChallenge({
      challengeId: challenge.challengeId,
      email: "same@example.com",
      code: challenge.devCode
    });

    expect(tokens.accessToken).toBeTruthy();
    expect(tokens.refreshToken).toBeTruthy();
    expect(repo.accounts.size).toBe(1);
    expect(identity.byEmail.size).toBe(1);
  });

  it("fails with wrong code", async () => {
    const repo = new FakeRepo();
    const identity = new FakeIdentityClient();
    const core = createCore(repo, identity);

    const challenge = await core.createChallenge("wrong@example.com");

    await expect(
      core.verifyChallenge({
        challengeId: challenge.challengeId,
        email: "wrong@example.com",
        code: "000000"
      })
    ).rejects.toThrow("invalid_code");
  });

  it("does not duplicate person on repeated sign in", async () => {
    const repo = new FakeRepo();
    const identity = new FakeIdentityClient();
    const core = createCore(repo, identity);

    const challenge1 = await core.createChallenge("repeat@example.com");
    await core.verifyChallenge({
      challengeId: challenge1.challengeId,
      email: "repeat@example.com",
      code: challenge1.devCode
    });

    const challenge2 = await core.createChallenge("repeat@example.com");
    await core.verifyChallenge({
      challengeId: challenge2.challengeId,
      email: "repeat@example.com",
      code: challenge2.devCode
    });

    expect(identity.byEmail.size).toBe(1);
    expect(repo.accounts.size).toBe(1);
  });
});
