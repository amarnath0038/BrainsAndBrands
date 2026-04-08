import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().min(10, "Phone number is too short"),
  service: z.enum(["Studio Rental", "Professional Equipment", "Production Services"], {
    message: "Please select a service",
  }),
  comments: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;


