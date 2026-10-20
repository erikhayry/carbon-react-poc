import { test, expect } from "@playwright/test";
import { AboutPage } from "@e2e/pages/about-page";
import { CardPage } from "@e2e/pages/card-page";
import { HomePage } from "@e2e/pages/home-page";
import { NotFoundPage } from "@e2e/pages/not-found-page";

test("navigates between routes with client-side links", async ({ page }) => {
  const home = new HomePage(page);
  const about = new AboutPage(page);
  const card = new CardPage(page);

  await home.goto();
  await expect(home.getStarted).toBeVisible();
  await home.markDocument();

  await home.clickNavLink("about");
  await expect(page).toHaveURL(AboutPage.path("en"));
  await expect(about.heading).toBeVisible();

  await about.clickNavLink("card42");
  await expect(page).toHaveURL(CardPage.path("en", "42"));
  await expect(card.heading("42")).toBeVisible();

  await card.clickNavLink("home");
  await expect(page).toHaveURL(HomePage.path("en"));
  await expect(home.getStarted).toBeVisible();

  expect(await home.isSameDocument()).toBe(true);
});

test("renders a route when loaded directly by URL", async ({ page }) => {
  const about = new AboutPage(page);
  await about.goto();

  await expect(about.heading).toBeVisible();
});

test("passes dynamic params from the file name", async ({ page }) => {
  const card = new CardPage(page);
  await card.goto("abc");

  await expect(card.heading("abc")).toBeVisible();
});

test("supports browser back and forward", async ({ page }) => {
  const home = new HomePage(page);
  const about = new AboutPage(page);

  await home.goto();
  await home.clickNavLink("about");
  await expect(page).toHaveURL(AboutPage.path("en"));

  await page.goBack();
  await expect(page).toHaveURL(HomePage.path("en"));
  await expect(home.getStarted).toBeVisible();

  await page.goForward();
  await expect(about.heading).toBeVisible();
});

test("shows not found for unknown routes", async ({ page }) => {
  const notFound = new NotFoundPage(page);
  await notFound.goto();

  await expect(notFound.message).toBeVisible();
});
