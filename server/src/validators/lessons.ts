import { z } from "zod";

export const LessonRequestPayloadValidator = z.object({
  unit: z
    .string({
      invalid_type_error: "Unit field must be of type string",
    })
    .optional(),

  tags: z.string().array().optional(),

  note: z
    .string({
      invalid_type_error: "Note field must be of type string",
    })
    .optional(),

  date: z.string({
    required_error: "Date must be provided",
    invalid_type_error: "Date field must be of type date",
  }),

  attachments: z.string().array().optional(),

  schedule_id: z.string({
    invalid_type_error: "schedule_id must be of type string",
    required_error: "schedule_id must be provided",
  }),
});

export type LessonRequestPayloadType = z.infer<
  typeof LessonRequestPayloadValidator
>;
