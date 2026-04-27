import { z } from "zod";

export const leadInterestOptions = [
  "ERP Solutions",
  "CRM Solutions",
  "Custom AI Tools",
  "Web / Mobile Development",
  "Consulting",
  "Other",
] as const;

export const leadCaptureSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.enum(leadInterestOptions, {
    errorMap: () => ({ message: "Please select what you're looking for" }),
  }),
});

export type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

export const exitIntentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export type ExitIntentFormData = z.infer<typeof exitIntentSchema>;
