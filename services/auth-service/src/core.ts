import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import { AuthTokens } from "@rh/shared-types";
import { AuthRepository, IdentityClient } from "./types.js";

export interface AuthCoreConfig {
  accessSecret: string;
  refreshSecret: string;
  accessTtlSeconds: number;
  refreshTtlSeconds: number;
  otpTtlMinutes: number;
}

export class AuthCore {
  constructor(
    private readonly repository: AuthRepository,
    private readonly identityClient: IdentityClient,
    private readonly config: AuthCoreConfig
  ) {}

  async createChallenge(email: string): Promise<{ challengeId: string; expiresAt: string; devCode: string }> {
    const code = this.generateOtp();
    const codeHash = this.hash(code);
    const expiresAt = new Date(Date.now() + this.config.otpTtlMinutes * 60_000);
    const challenge = await this.repository.createChallenge(email, codeHash, expiresAt);

    return { challengeId: challenge.id, expiresAt: expiresAt.toISOString(), devCode: code };
  }

  async verifyChallenge(input: { challengeId: string; email: string; code: string }): Promise<AuthTokens> {
    const challenge = await this.repository.getChallenge(input.challengeId);
    if (!challenge || challenge.email !== input.email) {
      throw new Error("challenge_not_found");
    }
    if (challenge.consumedAt) {
      throw new Error("challenge_consumed");
    }
    if (challenge.expiresAt.getTime() < Date.now()) {
      throw new Error("challenge_expired");
    }

    if (this.hash(input.code) !== challenge.codeHash) {
      throw new Error("invalid_code");
    }

    await this.repository.consumeChallenge(challenge.id);

    const account = (await this.repository.findAccountByEmail(input.email)) ?? (await this.repository.createAccount(input.email));
    const identity = await this.identityClient.resolveOrCreatePersonByEmail({ accountId: account.id, email: account.email });

    const refreshTokenHash = this.hash(crypto.randomBytes(40).toString("hex"));
    const session = await this.repository.createSession({
      accountId: account.id,
      personId: identity.personId,
      refreshTokenHash,
      expiresAt: new Date(Date.now() + this.config.refreshTtlSeconds * 1000)
    });

    const accessToken = jwt.sign(
      { email: account.email, personId: identity.personId, sessionId: session.id },
      this.config.accessSecret,
      {
        subject: account.id,
        expiresIn: this.config.accessTtlSeconds
      }
    );

    const refreshToken = this.issueRefreshTokenJwt({
      accountId: account.id,
      sessionId: session.id,
      email: account.email
    });

    return {
      accessToken,
      refreshToken,
      expiresInSeconds: this.config.accessTtlSeconds
    };
  }

  async refreshSession(refreshToken: string): Promise<AuthTokens> {
    const payload = jwt.verify(refreshToken, this.config.refreshSecret) as jwt.JwtPayload;
    const sessionId = payload.sid;
    const accountId = payload.sub;
    if (typeof sessionId !== "string" || typeof accountId !== "string") {
      throw new Error("invalid_refresh_token");
    }

    const session = await this.repository.findSessionById(sessionId);
    if (!session || session.revokedAt || session.expiresAt.getTime() < Date.now()) {
      throw new Error("session_inactive");
    }

    const rawRefreshToken = crypto.randomBytes(40).toString("hex");
    const refreshTokenHash = this.hash(rawRefreshToken);
    await this.repository.revokeSession(sessionId);
    const newSession = await this.repository.createSession({
      accountId,
      personId: session.personId,
      refreshTokenHash,
      expiresAt: new Date(Date.now() + this.config.refreshTtlSeconds * 1000)
    });

    const accessToken = jwt.sign(
      { email: payload.email, personId: session.personId, sessionId: newSession.id },
      this.config.accessSecret,
      { subject: accountId, expiresIn: this.config.accessTtlSeconds }
    );

    const refreshJwt = jwt.sign(
      { sid: newSession.id, email: payload.email },
      this.config.refreshSecret,
      { subject: accountId, expiresIn: this.config.refreshTtlSeconds }
    );

    return {
      accessToken,
      refreshToken: refreshJwt,
      expiresInSeconds: this.config.accessTtlSeconds
    };
  }

  async logout(refreshToken: string): Promise<void> {
    const payload = jwt.verify(refreshToken, this.config.refreshSecret) as jwt.JwtPayload;
    const sessionId = payload.sid;
    if (typeof sessionId !== "string") {
      throw new Error("invalid_refresh_token");
    }
    await this.repository.revokeSession(sessionId);
  }

  issueRefreshTokenJwt(input: { accountId: string; sessionId: string; email: string }): string {
    return jwt.sign({ sid: input.sessionId, email: input.email }, this.config.refreshSecret, {
      subject: input.accountId,
      expiresIn: this.config.refreshTtlSeconds
    });
  }

  private generateOtp(): string {
    const number = crypto.randomInt(0, 1_000_000);
    return String(number).padStart(6, "0");
  }

  private hash(value: string): string {
    return crypto.createHash("sha256").update(value).digest("hex");
  }
}
