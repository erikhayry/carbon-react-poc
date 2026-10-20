import type { Locator } from "@playwright/test";
import { AppPage } from "./app-page";

export class CardPage extends AppPage {
  static path(cardId: string) {
    return `/cards/${cardId}`;
  }

  heading(cardId: string): Locator {
    return this.page.getByRole("heading", { name: `Card ${cardId}` });
  }

  async goto(cardId: string) {
    await this.page.goto(CardPage.path(cardId));
  }
}
