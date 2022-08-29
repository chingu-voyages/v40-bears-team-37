import { z } from "zod";

export const weeklyScheduleQueryValidator = z.object({
  weekId: z.string({ invalid_type_error: "Must be a string" }).optional(),
});

export type WeeklyScheduleQueryType = z.infer<
  typeof weeklyScheduleQueryValidator
>;

export const CoursePayloadValidator = z.object({
  name: z.string({
    required_error: "Course name is required",
    invalid_type_error: "Course name must be of type string",
  }),
  start_date: z.number({
    required_error: "Start date is required",
    invalid_type_error: "Start date must be of type number",
  }),
  end_date: z
    .number({
      invalid_type_error: "Start date must be a number",
    })
    .optional(),
  color: z.string({
    required_error: "Course color is required",
    invalid_type_error: "Course color must be of type number",
  }),
  weekly_schedule: z.object({
    monday: z.array(
      z.object({
        start_time: z.string(),
        end_time: z.string(),
      }),
    ),
    tuesday: z.array(
      z.object({
        start_time: z.string(),
        end_time: z.string(),
      }),
    ),
    wednesday: z.array(
      z.object({
        start_time: z.string(),
        end_time: z.string(),
      }),
    ),
    thursday: z.array(
      z.object({
        start_time: z.string(),
        end_time: z.string(),
      }),
    ),
    friday: z.array(
      z.object({
        start_time: z.string(),
        end_time: z.string(),
      }),
    ),
  }),
});

export type CoursePayloadType = z.infer<typeof CoursePayloadValidator>;
