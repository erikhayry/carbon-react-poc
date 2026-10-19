import { test, expect } from "@playwright/test";

test("Should load the app", async ({ page }) => {
  // Visit root page
  await page.goto("/");

  // rediect to login page
  await expect(page.getByText("Get started!!!")).toBeVisible();
});
