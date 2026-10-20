import type { Locator, Page } from "@playwright/test";
import { AppPage, type Locale } from "./app-page";

export class HomePage extends AppPage {
  /** Root URL without a locale prefix. */
  static readonly unprefixedPath = "/";
  readonly getStarted: Locator;

  constructor(page: Page, locale?: Locale) {
    super(page, locale);
    this.getStarted = page.getByRole("heading", { name: this.t.get_started });
  }

  static path(locale: Locale) {
    return AppPage.localizedPath(locale, "/");
  }

  async goto() {
    await this.page.goto(HomePage.path(this.locale));
  }

  async gotoUnprefixed() {
    await this.page.goto(HomePage.unprefixedPath);
  }
}
