import { expect, test } from "@playwright/test";
import { LoginPage } from "@e2e/pages/login/login-page";

test("shows the login title", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();

  await expect(login.heading).toBeVisible();
});

test("translates the login title", async ({ page }) => {
  const login = new LoginPage(page, "sv");
  await login.goto();

  await expect(login.heading).toBeVisible();
  await expect(login.html).toHaveAttribute("lang", "sv");
});

test("switches language and keeps the page", async ({ page }) => {
  const enLogin = new LoginPage(page, "en");
  const svLogin = new LoginPage(page, "sv");

  await enLogin.goto();
  await enLogin.selectLanguage("sv");

  await expect(page).toHaveURL(LoginPage.path("sv"));
  await expect(svLogin.heading).toBeVisible();
});
