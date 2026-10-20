import type { Locator, Page } from "@playwright/test";
import { AppPage } from "./app-page";

export class AboutPage extends AppPage {
  static readonly path = "/about";
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole("heading", { name: "About" });
  }

  async goto() {
    await this.page.goto(AboutPage.path);
  }
}
