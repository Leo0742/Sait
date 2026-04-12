import { IdentityClient } from "./types.js";

export class HttpIdentityClient implements IdentityClient {
  constructor(private readonly baseUrl: string) {}

  async resolveOrCreatePersonByEmail(input: { accountId: string; email: string }): Promise<{ personId: string }> {
    const response = await fetch(`${this.baseUrl}/internal/v1/person-link`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      throw new Error("identity_service_unavailable");
    }

    return (await response.json()) as { personId: string };
  }
}
