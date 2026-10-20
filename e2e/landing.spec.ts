import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home-page";

test("Should load the app", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await expect(home.getStarted).toBeVisible();
});
