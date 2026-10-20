import type { Locator, Page } from "@playwright/test";
import { AppPage } from "@e2e/pages/app-page";
import type { Locale } from "@/types/locale";

export class LandingPage extends AppPage {
  /** Root URL without a locale prefix. */
  static readonly unprefixedPath = "/";
  readonly heading: Locator;

  constructor(page: Page, locale?: Locale) {
    super(page, locale);
    this.heading = page.getByRole("heading", { name: this.t.landing_title });
  }

  static path(locale: Locale) {
    return AppPage.localizedPath(locale, "/");
  }

  async goto() {
    await this.page.goto(LandingPage.path(this.locale));
  }

  async gotoUnprefixed() {
    await this.page.goto(LandingPage.unprefixedPath);
  }
}
