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

export interface TeamRoutePassport {
  id: string;
  eventId: string;
  teamId: string;
  routeVersion: number;
  status: "draft" | "active" | "completed" | "needs_review";
  createdAt: string;
  updatedAt: string;
}
