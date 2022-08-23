import { z } from "zod";

export const weeklyScheduleQueryValidator = z.object({
  weekId: z.string({ invalid_type_error: "Must be a string" }).optional(),
});

export type WeeklyScheduleQueryType = z.infer<
  typeof weeklyScheduleQueryValidator
>;
