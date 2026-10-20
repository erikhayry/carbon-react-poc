import type { Locator, Page } from "@playwright/test";
import { AppPage } from "./app-page";

export class HomePage extends AppPage {
  static readonly path = "/";
  readonly getStarted: Locator;

  constructor(page: Page) {
    super(page);
    this.getStarted = page.getByText("Get started!!!");
  }

  async goto() {
    await this.page.goto(HomePage.path);
  }
}
