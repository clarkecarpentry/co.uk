import { expect, test } from "@playwright/test";

test.describe("Services Page", () => {
  test("displays all services", async ({ page }) => {
    await page.goto("/services");

    // Check page title
    await expect(page).toHaveTitle(/Services.*Clarke Carpentry/);

    // Check main heading
    await expect(
      page.getByRole("heading", { name: /services/i }).first(),
    ).toBeVisible();

    // Check all 11 services are displayed
    const serviceNames = [
      "Project Management",
      "First Fix Carpentry",
      "Second Fix Carpentry",
      "Dry Lining",
      "Extensions",
      "Traditional Cut Roofs",
      "New Build",
      "Renovations",
      "Bespoke Joinery",
      "Kitchen Fitting",
      "Timber Frame Construction",
    ];

    for (const serviceName of serviceNames) {
      await expect(page.getByText(serviceName).first()).toBeVisible();
    }
  });

  test("navigates to individual service page", async ({ page }) => {
    await page.goto("/services");

    // Click on First Fix Carpentry link
    await page.getByRole("link", { name: /first fix/i }).first().click();

    // Should navigate to the service page
    await expect(page).toHaveURL(/\/services\/first-fix/);

    // Check service page content
    await expect(
      page.getByRole("heading", { name: /first fix/i }).first(),
    ).toBeVisible();
  });
});
