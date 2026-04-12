export interface AuthChallengeRecord {
  id: string;
  email: string;
  codeHash: string;
  expiresAt: Date;
  consumedAt: Date | null;
  createdAt: Date;
}

export interface AccountRecord {
  id: string;
  email: string;
  createdAt: Date;
}

export interface SessionRecord {
  id: string;
  accountId: string;
  personId: string;
  refreshTokenHash: string;
  expiresAt: Date;
  revokedAt: Date | null;
  createdAt: Date;
}

export interface AuthRepository {
  createChallenge(email: string, codeHash: string, expiresAt: Date): Promise<AuthChallengeRecord>;
  getChallenge(challengeId: string): Promise<AuthChallengeRecord | null>;
  consumeChallenge(challengeId: string): Promise<void>;
  findAccountByEmail(email: string): Promise<AccountRecord | null>;
  createAccount(email: string): Promise<AccountRecord>;
  createSession(input: {
    accountId: string;
    personId: string;
    refreshTokenHash: string;
    expiresAt: Date;
  }): Promise<SessionRecord>;
  findSessionById(sessionId: string): Promise<SessionRecord | null>;
  revokeSession(sessionId: string): Promise<void>;
}

export interface IdentityClient {
  resolveOrCreatePersonByEmail(input: { accountId: string; email: string }): Promise<{ personId: string }>;
}
