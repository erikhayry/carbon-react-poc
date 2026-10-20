import type { Locator, Page } from "@playwright/test";
import type { Locale } from "@/types/locale";
import { baseLocale } from "@/paraglide/runtime";
import en from "@messages/en.json" with { type: "json" };
import sv from "@messages/sv.json" with { type: "json" };

const messages: Record<Locale, typeof en> = { en, sv };

/** Shared layout from src/routes/__root.tsx, present on every page. */
export class AppPage {
  readonly page: Page;
  readonly locale: Locale;
  readonly t: (typeof messages)[Locale];
  readonly languageSwitcher: Locator;
  readonly html: Locator;

  constructor(page: Page, locale: Locale = baseLocale) {
    this.page = page;
    this.locale = locale;
    this.t = messages[locale];
    this.languageSwitcher = page.getByRole("combobox", {
      name: this.t.language_switcher_label,
    });
    this.html = page.locator("html");
  }

  /** Prefixes a route path with the locale, e.g. ("sv", "/login") => "/sv/login". */
  static localizedPath(locale: Locale, path: string) {
    return `/${locale}${path}`;
  }

  async selectLanguage(locale: Locale) {
    await this.languageSwitcher.selectOption(locale);
  }
}
