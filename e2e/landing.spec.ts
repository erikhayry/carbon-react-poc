import { expect, test } from "@playwright/test";
import { HomePage } from "@e2e/pages/home-page";

test("Should load the app", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await expect(home.getStarted).toBeVisible();
});
