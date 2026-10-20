import type { Locator, Page } from "@playwright/test";
import { AppPage } from "./app-page";
import type { Locale } from "../../src/types/locale";

export class NotFoundPage extends AppPage {
  readonly message: Locator;

  constructor(page: Page, locale?: Locale) {
    super(page, locale);
    this.message = page.getByText(this.t.not_found);
  }

  static path(locale: Locale) {
    return AppPage.localizedPath(locale, "/does-not-exist");
  }

  async goto() {
    await this.page.goto(NotFoundPage.path(this.locale));
  }
}
