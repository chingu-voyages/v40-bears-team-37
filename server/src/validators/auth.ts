import { z } from "zod";

export const LoginPayloadValidator = z.object({
  email: z.string().email("Must be an email").min(4, "Minimum 4 letters").max(100, "Maximum 100 letters"),
  password: z.string().min(4, "Minimum 4 letters").max(100, "Maximum 100 letters"),
});

export type LoginPayloadType = z.infer<typeof LoginPayloadValidator>;

export const SignupPayloadValidator = z.object({
  email: z.string().email("Must be an email").min(4, "Minimum 4 letters").max(100, "Maximum 100 letters"),
  name: z.string().min(4, "Minimum 4 letters").max(100, "Maximum 100 letters"),
  password: z.string().min(4, "Minimum 4 letters").max(100, "Maximum 100 letters"),
});

export type SignupPayloadType = z.infer<typeof SignupPayloadValidator>;
