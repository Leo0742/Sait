import { z } from "zod";

export const EventModeSchema = z.enum(["INDIVIDUAL", "TEAM", "HYBRID"]);
export type EventMode = z.infer<typeof EventModeSchema>;

export const CheckpointStatusSchema = z.enum([
  "not_started",
  "in_progress",
  "completed",
  "blocked",
  "needs_review"
]);
export type CheckpointStatus = z.infer<typeof CheckpointStatusSchema>;

export const GlobalRoleSchema = z.enum([
  "super_admin",
  "platform_admin",
  "content_manager",
  "participant"
]);
export type GlobalRole = z.infer<typeof GlobalRoleSchema>;

export const EventRoleSchema = z.enum([
  "event_admin",
  "volunteer_coordinator",
  "checkin_operator",
  "station_curator",
  "station_volunteer",
  "actor",
  "participant"
]);
export type EventRole = z.infer<typeof EventRoleSchema>;

export const EmailSchema = z.email().transform((value) => value.toLowerCase().trim());

export const RequestAuthChallengeSchema = z.object({
  email: EmailSchema
});
export type RequestAuthChallengeInput = z.infer<typeof RequestAuthChallengeSchema>;

export const VerifyAuthChallengeSchema = z.object({
  challengeId: z.string().uuid(),
  email: EmailSchema,
  code: z.string().length(6)
});
export type VerifyAuthChallengeInput = z.infer<typeof VerifyAuthChallengeSchema>;

export const AuthTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresInSeconds: z.number().int().positive()
});
export type AuthTokens = z.infer<typeof AuthTokensSchema>;

export const ProfileSchema = z.object({
  personId: z.string().uuid(),
  email: EmailSchema,
  firstName: z.string().min(1).max(100).nullable(),
  lastName: z.string().min(1).max(100).nullable(),
  phone: z.string().min(5).max(30).nullable(),
  birthDate: z.string().date().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});
export type Profile = z.infer<typeof ProfileSchema>;

export const ProfilePatchSchema = z.object({
  firstName: z.string().min(1).max(100).optional(),
  lastName: z.string().min(1).max(100).optional(),
  phone: z.string().min(5).max(30).optional(),
  birthDate: z.string().date().optional()
});
export type ProfilePatchInput = z.infer<typeof ProfilePatchSchema>;

export interface TeamRoutePassport {
  id: string;
  eventId: string;
  teamId: string;
  routeVersion: number;
  status: "draft" | "active" | "completed" | "needs_review";
  createdAt: string;
  updatedAt: string;
}
