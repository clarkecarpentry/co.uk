import { describe, expect, it } from "vitest";
import { contactFormSchema, contactSubmissionSchema } from "./contact";

describe("contactFormSchema", () => {
  const validData = {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "07700 900000",
    service: "first-fix",
    message: "I need carpentry work done on my property.",
  };

  it("validates correct data", () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("allows optional phone and service fields", () => {
    const result = contactFormSchema.safeParse({
      firstName: "John",
      lastName: "Smith",
      email: "john@example.com",
      message: "I need carpentry work done on my property.",
    });
    expect(result.success).toBe(true);
  });

  it("allows empty string for phone", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      phone: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing firstName", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      firstName: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("First name is required");
    }
  });

  it("rejects missing lastName", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      lastName: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Last name is required");
    }
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter a valid email address",
      );
    }
  });

  it("rejects message under 10 characters", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      message: "Short",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Message must be at least 10 characters",
      );
    }
  });

  it("rejects firstName over 50 characters", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      firstName: "A".repeat(51),
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "First name must be less than 50 characters",
      );
    }
  });

  it("rejects message over 5000 characters", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      message: "A".repeat(5001),
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Message must be less than 5000 characters",
      );
    }
  });
});

describe("contactSubmissionSchema", () => {
  const validSubmission = {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "07700 900000",
    service: "first-fix",
    message: "I need carpentry work done on my property.",
    turnstileToken: "test-token-123",
  };

  it("validates correct submission data with token", () => {
    const result = contactSubmissionSchema.safeParse(validSubmission);
    expect(result.success).toBe(true);
  });

  it("rejects missing turnstile token", () => {
    const { turnstileToken: _, ...withoutToken } = validSubmission;
    const result = contactSubmissionSchema.safeParse(withoutToken);
    expect(result.success).toBe(false);
  });

  it("rejects empty turnstile token", () => {
    const result = contactSubmissionSchema.safeParse({
      ...validSubmission,
      turnstileToken: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please complete the security check",
      );
    }
  });
});
