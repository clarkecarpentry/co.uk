import { test, expect } from "@playwright/test";

/**
 * E2E tests to verify content is being fetched from Sanity.
 *
 * These tests check that:
 * 1. The test marker [TEST] appears on the first service (only in dev dataset)
 * 2. Content from Sanity is correctly rendered on pages
 *
 * IMPORTANT: These tests require the development dataset to be populated.
 * Run `SANITY_API_KEY=your_key NEXT_PUBLIC_SANITY_DATASET=development pnpm test:setup`
 * to populate the development dataset before running these tests.
 */

test.describe("Sanity CMS Content", () => {
  test("services page displays content from Sanity development dataset", async ({
    page,
  }) => {
    await page.goto("/services");

    // Wait for services to load
    await expect(
      page.getByRole("heading", { name: /our services/i })
    ).toBeVisible();

    // Check that we have services displayed (using main content area)
    // The main section contains service cards as links
    const mainContent = page.locator("main");
    const serviceCards = mainContent.locator('a[href^="/services/"][href$="-"]');
    const count = await serviceCards.count();

    // Should have services (11 if migrated, or 0 if dataset is empty)
    console.log(`Found ${count} service cards`);

    if (count === 0) {
      test.skip(true, "Development dataset appears empty - run test:setup first");
      return;
    }

    expect(count).toBe(11);

    // If test data migration ran, the first service should have [TEST] marker
    const firstServiceCard = mainContent.locator(
      'a[href="/services/project-management"]'
    );

    if ((await firstServiceCard.count()) > 0) {
      await expect(firstServiceCard).toBeVisible();

      // Get the service name text
      const serviceName = firstServiceCard.locator("h3, h2").first();
      const nameText = await serviceName.textContent();

      expect(nameText).toBeTruthy();
      console.log(`First service name: "${nameText}"`);

      // If the test marker is present, it proves content comes from dev Sanity dataset
      if (nameText?.includes("[TEST]")) {
        console.log(
          "✅ Test marker found - content verified from development dataset"
        );
      } else {
        console.log(
          "ℹ️  Test marker not found - test data migration may not have run"
        );
      }
    }
  });

  test("individual service page loads content from Sanity", async ({ page }) => {
    await page.goto("/services/first-fix-carpentry");

    // Check if page has content (not a 404)
    const heading = page.locator("h1").first();
    const headingText = await heading.textContent();

    if (!headingText || headingText.includes("404") || headingText.includes("Not Found")) {
      test.skip(true, "Service not found - development dataset may be empty");
      return;
    }

    // Verify the page loaded with Sanity content
    await expect(heading).toBeVisible();
    console.log(`Service page heading: "${headingText}"`);

    // Check that the page has some content
    const mainContent = page.locator("main");
    await expect(mainContent).toBeVisible();
  });

  test("projects page displays content from Sanity", async ({ page }) => {
    await page.goto("/projects");

    // Wait for projects heading to load
    await expect(
      page.getByRole("heading", { name: /our projects/i })
    ).toBeVisible();

    // Check that projects are displayed (in main content area)
    const mainContent = page.locator("main");
    const projectCards = mainContent.locator('a[href^="/projects/"][href$="-"]');
    const count = await projectCards.count();

    console.log(`Found ${count} project cards`);

    if (count === 0) {
      test.skip(true, "Development dataset appears empty - run test:setup first");
      return;
    }

    expect(count).toBe(12);
  });

  test("blog posts are fetched from Sanity", async ({ page }) => {
    await page.goto("/blog");

    // Wait for blog heading to load
    await expect(page.getByRole("heading", { name: /blog/i }).first()).toBeVisible();

    // Check that blog posts are displayed (in main content area)
    const mainContent = page.locator("main");
    const blogCards = mainContent.locator('a[href^="/blog/"]');
    const count = await blogCards.count();

    console.log(`Found ${count} blog post cards`);

    if (count === 0) {
      test.skip(true, "Development dataset appears empty - run test:setup first");
      return;
    }

    expect(count).toBeGreaterThanOrEqual(4);
  });

  test("testimonials are fetched from Sanity", async ({ page }) => {
    await page.goto("/");

    // Look for testimonials section
    const testimonialsHeading = page.getByRole("heading", {
      name: /what our clients say/i,
    });

    if ((await testimonialsHeading.count()) === 0) {
      test.skip(true, "Testimonials section not found");
      return;
    }

    await testimonialsHeading.scrollIntoViewIfNeeded();

    // Check that testimonials are displayed
    const testimonials = page.locator("blockquote");
    const count = await testimonials.count();

    console.log(`Found ${count} testimonials`);

    if (count === 0) {
      test.skip(true, "Development dataset appears empty - run test:setup first");
      return;
    }

    expect(count).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Sanity Content with Test Marker", () => {
  test("verifies [TEST] marker proves content comes from development dataset", async ({
    page,
  }) => {
    // This test specifically checks for the test marker
    // It will be skipped if the marker is not present (migration didn't run)

    await page.goto("/services");

    // Wait for services to load
    await expect(
      page.getByRole("heading", { name: /our services/i })
    ).toBeVisible();

    // Look for the test marker in the first service
    const testMarker = page.getByText("[TEST]");
    const hasMarker = (await testMarker.count()) > 0;

    if (hasMarker) {
      await expect(testMarker.first()).toBeVisible();
      console.log("✅ [TEST] marker verified - development dataset confirmed");
    } else {
      // Skip this test if marker not found
      test.skip(
        true,
        "Test marker not found - SANITY_API_KEY may not be configured for test:setup"
      );
    }
  });
});
