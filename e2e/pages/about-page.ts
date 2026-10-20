import type { Locator, Page } from "@playwright/test";
import { AppPage } from "@e2e/pages/app-page";
import type { Locale } from "@/types/locale";

export class AboutPage extends AppPage {
  readonly heading: Locator;

  constructor(page: Page, locale?: Locale) {
    super(page, locale);
    this.heading = page.getByRole("heading", { name: this.t.about_title });
  }

  static path(locale: Locale) {
    return AppPage.localizedPath(locale, "/about");
  }

  async goto() {
    await this.page.goto(AboutPage.path(this.locale));
  }
}
