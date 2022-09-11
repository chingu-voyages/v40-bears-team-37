import { z } from "zod";

export const LessonFilterQueryValidator = z.object({
  tag: z
    .string({
      invalid_type_error: "tag must be of type string",
    })
    .optional(),
});

export type LessonFilterQueryType = z.infer<typeof LessonFilterQueryValidator>;

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

  date: z.number({
    required_error: "Date must be provided",
    invalid_type_error: "Date field must be of type number",
  }),

  attachments: z.string().array().optional(),

  schedule_id: z.string({
    invalid_type_error: "schedule_id must be of type string",
    required_error: "schedule_id must be provided",
  }),

  course_id: z.string({
    invalid_type_error: "course_id must be of type string",
    required_error: "course_id must be provided",
  }),
});

export type LessonRequestPayloadType = z.infer<
  typeof LessonRequestPayloadValidator
>;

export const UpdateLessonRequestPayloadValidator = z.object({
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

  attachments: z.string().array().optional(),
});

export type UpdateLessonRequestPayloadType = z.infer<
  typeof UpdateLessonRequestPayloadValidator
>;
