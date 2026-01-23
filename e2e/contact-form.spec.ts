import { expect, test } from "@playwright/test";

test.describe("Contact Form", () => {
  test("displays form and validates input", async ({ page }) => {
    await page.goto("/contact");

    // Check form fields are present
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();

    // Submit empty form to trigger validation
    await page.getByRole("button", { name: /send message/i }).click();

    // Check validation messages appear (Zod validation shows error messages)
    await expect(page.getByText(/first name is required/i)).toBeVisible();
  });

  test("fills out form correctly", async ({ page }) => {
    await page.goto("/contact");

    // Fill in the form
    await page.getByLabel(/first name/i).fill("John");
    await page.getByLabel(/last name/i).fill("Smith");
    await page.getByLabel(/email/i).fill("john@example.com");
    await page.getByLabel(/phone/i).fill("07700 900000");
    await page.getByLabel(/message/i).fill("I need carpentry work done on my property. Please get in touch.");

    // Verify values are filled
    await expect(page.getByLabel(/first name/i)).toHaveValue("John");
    await expect(page.getByLabel(/last name/i)).toHaveValue("Smith");
    await expect(page.getByLabel(/email/i)).toHaveValue("john@example.com");
    await expect(page.getByLabel(/phone/i)).toHaveValue("07700 900000");

    // Note: We don't actually submit as it would send an email
    // This test verifies the form UI works correctly
  });
});
