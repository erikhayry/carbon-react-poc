# Agent rules

## Components

- Never add a `className` prop to a component (in its props type, destructuring, or pass-through to children) unless the user explicitly asks for it in that request. Styling is handled inside the component.

## E2E tests (Playwright)

- Always use the Page Object Model. Page objects live in `e2e/pages/` (one class per page, extending `AppPage` for the shared layout).
- Specs must not contain raw selectors (`page.getByRole`, `page.locator`, etc.) or URL strings. Locators, paths and actions belong in page objects; specs only call page objects and make assertions.
- Assertions (`expect`) stay in the specs, not in page objects.

## Translations (Paraglide)

- Never hardcode user-facing text in components or routes. All UI text (including `aria-label`, `alt`, `title`, placeholders and Carbon props like `labelText`) must come from Paraglide messages: `m.some_key()` from `src/paraglide/messages`.
- When adding a message, add the key to every file in `messages/` (`en.json`, `sv.json`) in the same change.
- Use placeholders for dynamic values (`"card_title": "Card {cardId}"` → `m.card_title({ cardId })`), never string concatenation.
- E2E page objects read text from `messages/*.json` via `this.t`, never hardcoded strings.
