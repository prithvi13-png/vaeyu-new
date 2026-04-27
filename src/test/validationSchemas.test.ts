import { describe, it, expect } from "vitest";
import { leadCaptureSchema, exitIntentSchema } from "@/lib/validationSchemas";

describe("leadCaptureSchema", () => {
  it("accepts a valid payload with all fields", () => {
    const result = leadCaptureSchema.safeParse({
      name: "John Doe",
      email: "john@company.com",
      phone: "+91 9876543210",
      interest: "ERP Solutions",
    });
    expect(result.success).toBe(true);
  });

  it("accepts a valid payload without optional phone", () => {
    const result = leadCaptureSchema.safeParse({
      name: "Jane Doe",
      email: "jane@company.com",
      interest: "CRM Solutions",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = leadCaptureSchema.safeParse({
      name: "J",
      email: "j@company.com",
      interest: "ERP Solutions",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = leadCaptureSchema.safeParse({
      name: "Valid Name",
      email: "not-an-email",
      interest: "ERP Solutions",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid interest option", () => {
    const result = leadCaptureSchema.safeParse({
      name: "Valid Name",
      email: "valid@company.com",
      interest: "Something random",
    });
    expect(result.success).toBe(false);
  });

  it("rejects when interest is missing", () => {
    const result = leadCaptureSchema.safeParse({
      name: "Valid Name",
      email: "valid@company.com",
    });
    expect(result.success).toBe(false);
  });
});

describe("exitIntentSchema", () => {
  it("accepts a valid name and email", () => {
    const result = exitIntentSchema.safeParse({
      name: "Priya Singh",
      email: "priya@company.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = exitIntentSchema.safeParse({
      name: "P",
      email: "p@company.com",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = exitIntentSchema.safeParse({
      name: "Valid Name",
      email: "bad-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects when name is missing", () => {
    const result = exitIntentSchema.safeParse({
      email: "valid@company.com",
    });
    expect(result.success).toBe(false);
  });
});
