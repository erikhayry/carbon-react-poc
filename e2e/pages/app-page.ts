import type { Locator, Page } from "@playwright/test";

type NavLink = "Home" | "About" | "Card 42";

/** Shared layout from src/routes/__root.tsx, present on every page. */
export class AppPage {
  readonly nav: Locator;

  constructor(readonly page: Page) {
    this.nav = page.getByRole("navigation", { name: "Main" });
  }

  async clickNavLink(name: NavLink) {
    await this.nav.getByRole("link", { name }).click();
  }

  /** Sets a marker on window that is lost if the page does a full reload. */
  async markDocument() {
    await this.page.evaluate(() => {
      (window as unknown as { __marker: boolean }).__marker = true;
    });
  }

  /** True if no full reload happened since markDocument(). */
  async isSameDocument() {
    return this.page.evaluate(
      () => (window as unknown as { __marker?: boolean }).__marker === true,
    );
  }
}
