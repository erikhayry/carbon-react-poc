import { test, expect } from "@playwright/test";
import { AboutPage } from "./pages/about-page";
import { CardPage } from "./pages/card-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";

test("renders Swedish when the URL has the /sv prefix", async ({ page }) => {
  const about = new AboutPage(page, "sv");
  await about.goto();

  await expect(about.heading).toBeVisible();
  await expect(about.html).toHaveAttribute("lang", "sv");
  await expect(about.languageSwitcher).toHaveValue("sv");
});

test("renders English when the URL has the /en prefix", async ({ page }) => {
  const about = new AboutPage(page, "en");
  await about.goto();

  await expect(about.heading).toBeVisible();
  await expect(about.html).toHaveAttribute("lang", "en");
  await expect(about.languageSwitcher).toHaveValue("en");
});

test("switches language and keeps the current page", async ({ page }) => {
  const enAbout = new AboutPage(page, "en");
  const svAbout = new AboutPage(page, "sv");

  await enAbout.goto();
  await enAbout.selectLanguage("sv");

  await expect(page).toHaveURL(AboutPage.path("sv"));
  await expect(svAbout.heading).toBeVisible();
  await expect(svAbout.html).toHaveAttribute("lang", "sv");

  await svAbout.selectLanguage("en");

  await expect(page).toHaveURL(AboutPage.path("en"));
  await expect(enAbout.heading).toBeVisible();
});

test("keeps the locale prefix when navigating with links", async ({ page }) => {
  const home = new HomePage(page, "sv");
  const card = new CardPage(page, "sv");

  await home.goto();
  await home.clickNavLink("card42");

  await expect(page).toHaveURL(CardPage.path("sv", "42"));
  await expect(card.heading("42")).toBeVisible();
});

test("translates the not found page", async ({ page }) => {
  const notFound = new NotFoundPage(page, "sv");
  await notFound.goto();

  await expect(notFound.message).toBeVisible();
});

test.describe("without a locale prefix", () => {
  test.use({ locale: "sv-SE" });

  test("uses the browser language", async ({ page }) => {
    const home = new HomePage(page, "sv");
    await home.gotoUnprefixed();

    await expect(home.getStarted).toBeVisible();
    await expect(home.html).toHaveAttribute("lang", "sv");
  });
});
