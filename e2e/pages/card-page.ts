import type { Locator } from "@playwright/test";
import { AppPage, type Locale } from "./app-page";

export class CardPage extends AppPage {
  static path(locale: Locale, cardId: string) {
    return AppPage.localizedPath(locale, `/cards/${cardId}`);
  }

  heading(cardId: string): Locator {
    return this.page.getByRole("heading", {
      name: this.t.card_title.replace("{cardId}", cardId),
    });
  }

  async goto(cardId: string) {
    await this.page.goto(CardPage.path(this.locale, cardId));
  }
}
