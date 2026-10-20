import { expect, test } from "@playwright/test";
import { LandingPage } from "@e2e/pages/landing/landing-page";

test("shows the landing title", async ({ page }) => {
  const landing = new LandingPage(page);
  await landing.goto();

  await expect(landing.heading).toBeVisible();
});

test("translates the landing title", async ({ page }) => {
  const landing = new LandingPage(page, "sv");
  await landing.goto();

  await expect(landing.heading).toBeVisible();
  await expect(landing.html).toHaveAttribute("lang", "sv");
});

test.describe("without a locale prefix", () => {
  test.use({ locale: "sv-SE" });

  test("uses the browser language", async ({ page }) => {
    const landing = new LandingPage(page, "sv");
    await landing.gotoUnprefixed();

    await expect(landing.heading).toBeVisible();
    await expect(landing.html).toHaveAttribute("lang", "sv");
  });
});
