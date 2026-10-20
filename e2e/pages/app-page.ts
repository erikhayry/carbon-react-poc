import type { Locator, Page } from "@playwright/test";
import en from "../../messages/en.json" with { type: "json" };
import sv from "../../messages/sv.json" with { type: "json" };

const messages = { en, sv };

export type Locale = keyof typeof messages;
type NavLink = "home" | "about" | "card42";

/** Shared layout from src/routes/__root.tsx, present on every page. */
export class AppPage {
  readonly page: Page;
  readonly locale: Locale;
  readonly t: (typeof messages)[Locale];
  readonly nav: Locator;
  readonly languageSwitcher: Locator;
  readonly html: Locator;

  constructor(page: Page, locale: Locale = "en") {
    this.page = page;
    this.locale = locale;
    this.t = messages[locale];
    this.nav = page.getByRole("navigation", { name: this.t.nav_label });
    this.languageSwitcher = page.getByRole("combobox", {
      name: this.t.language_switcher_label,
    });
    this.html = page.locator("html");
  }

  /** Prefixes a route path with the locale, e.g. ("sv", "/about") => "/sv/about". */
  static localizedPath(locale: Locale, path: string) {
    return `/${locale}${path}`;
  }

  async clickNavLink(link: NavLink) {
    const names: Record<NavLink, string> = {
      home: this.t.nav_home,
      about: this.t.nav_about,
      card42: this.t.nav_card.replace("{cardId}", "42"),
    };
    await this.nav.getByRole("link", { name: names[link], exact: true }).click();
  }

  async selectLanguage(locale: Locale) {
    await this.languageSwitcher.selectOption(locale);
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
