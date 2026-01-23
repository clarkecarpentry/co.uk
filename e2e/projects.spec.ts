import { expect, test } from "@playwright/test";

test.describe("Projects Page", () => {
  test("displays all projects", async ({ page }) => {
    await page.goto("/projects");

    // Check page title
    await expect(page).toHaveTitle(/Projects.*Clarke Carpentry/);

    // Check main heading
    await expect(
      page.getByRole("heading", { name: /projects/i }).first(),
    ).toBeVisible();

    // Check all 12 projects are displayed
    const projectNames = [
      "Wilder House",
      "Feltmakers Lane",
      "Weavers Lane",
      "Walcot House",
      "Claverham House",
      "Rockview",
      "Sherwood Road",
      "Porlock Road",
      "Number Three Hair Salon",
      "Box Hill",
      "Masters Church",
      "Oldland Common",
    ];

    for (const projectName of projectNames) {
      await expect(page.getByText(projectName).first()).toBeVisible();
    }
  });

  test("navigates to individual project page", async ({ page }) => {
    await page.goto("/projects");

    // Click on Wilder House heading link
    await page.getByRole("heading", { name: "Wilder House" }).click();

    // Should navigate to the project page
    await expect(page).toHaveURL(/\/projects\/wilder-house/);

    // Check project page content
    await expect(
      page.getByRole("heading", { name: /wilder house/i }).first(),
    ).toBeVisible();
  });
});
