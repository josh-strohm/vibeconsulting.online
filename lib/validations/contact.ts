import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(5000),
  source: z.string().trim().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
