import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads correctly", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/Clarke Carpentry/);

    // Check main heading is visible
    await expect(
      page.getByRole("heading", { name: /Clarke Carpentry/i }).first(),
    ).toBeVisible();

    // Check navigation is present
    await expect(page.getByRole("navigation")).toBeVisible();

    // Check footer is present
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
});
