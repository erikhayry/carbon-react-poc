import type { Locator, Page } from "@playwright/test";
import { AppPage } from "@e2e/pages/app-page";
import type { Locale } from "@/types/locale";

export class LoginPage extends AppPage {
  readonly heading: Locator;

  constructor(page: Page, locale?: Locale) {
    super(page, locale);
    this.heading = page.getByRole("heading", { name: this.t.login_title });
  }

  static path(locale: Locale) {
    return AppPage.localizedPath(locale, "/login");
  }

  async goto() {
    await this.page.goto(LoginPage.path(this.locale));
  }
}
