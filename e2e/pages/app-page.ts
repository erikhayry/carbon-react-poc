import type { Locator, Page } from "@playwright/test";
import { z } from "zod";
import en from "../../messages/en.json" with { type: "json" };
import sv from "../../messages/sv.json" with { type: "json" };
import { baseLocale } from "../../src/paraglide/runtime";
import type { Locale } from "../../src/types/locale";

const messages: Record<Locale, typeof en> = { en, sv };

const NavLinkSchema = z.enum(["home", "about", "card42"]);
type NavLink = z.infer<typeof NavLinkSchema>;

/** Shared layout from src/routes/__root.tsx, present on every page. */
export class AppPage {
  readonly page: Page;
  readonly locale: Locale;
  readonly t: (typeof messages)[Locale];
  readonly nav: Locator;
  readonly languageSwitcher: Locator;
  readonly html: Locator;

  constructor(page: Page, locale: Locale = baseLocale) {
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
