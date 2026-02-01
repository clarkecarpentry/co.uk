import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("navigates between pages", async ({ page }) => {
    await page.goto("/");

    // Navigate to Services
    await page.getByRole("link", { name: /services/i }).first().click();
    await expect(page).toHaveURL(/\/services/);
    await expect(
      page.getByRole("heading", { name: /services/i }).first(),
    ).toBeVisible();

    // Navigate to Projects
    await page.getByRole("link", { name: /projects/i }).first().click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(
      page.getByRole("heading", { name: /projects/i }).first(),
    ).toBeVisible();

    // Navigate to About
    await page.getByRole("link", { name: /about/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await expect(
      page.getByRole("heading", { name: /about/i }).first(),
    ).toBeVisible();

    // Navigate to Contact
    await page.getByRole("link", { name: /contact/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(
      page.getByRole("heading", { name: /contact/i }).first(),
    ).toBeVisible();

    // Navigate back to Home via logo
    await page.getByRole("link", { name: /clarke carpentry/i }).first().click();
    await expect(page).toHaveURL("/");
  });
});
