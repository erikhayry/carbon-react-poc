import type { Locator, Page } from "@playwright/test";
import { AppPage } from "./app-page";

export class NotFoundPage extends AppPage {
  static readonly path = "/does-not-exist";
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    this.message = page.getByText("Page not found");
  }

  async goto() {
    await this.page.goto(NotFoundPage.path);
  }
}
