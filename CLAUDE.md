# Agent rules

## Components

- Never add a `className` prop to a component (in its props type, destructuring, or pass-through to children) unless the user explicitly asks for it in that request. Styling is handled inside the component.

## Types (Zod)

- Always define types with Zod schemas. Never hand-write an `interface` or a standalone `type` alias for data or props; declare the schema and derive the type from it.
- Naming convention: the schema is `const <Type>Schema`, the type is `type <Type> = z.infer<typeof <Type>Schema>`, e.g. `const CardPropsSchema = z.object({ ... })` and `export type CardProps = z.infer<typeof CardPropsSchema>`.
- Compose schemas from other schemas (`.extend()`, `.pick()`, nesting) instead of duplicating fields.
- Values Zod cannot describe structurally (e.g. `ReactNode`) get a `z.custom<T>()` schema in `src/types/custom.tsx` so the convention still holds.
- Exceptions: generated files (`src/routeTree.gen.ts`) and third-party module augmentation (`declare module` blocks, e.g. TanStack Router's `Register` interface) must stay plain TypeScript.

## E2E tests (Playwright)

- Always use the Page Object Model. Page objects live in `e2e/pages/` (one class per page, extending `AppPage` for the shared layout).
- Specs must not contain raw selectors (`page.getByRole`, `page.locator`, etc.) or URL strings. Locators, paths and actions belong in page objects; specs only call page objects and make assertions.
- Assertions (`expect`) stay in the specs, not in page objects.

## Translations (Paraglide)

- Never hardcode user-facing text in components or routes. All UI text (including `aria-label`, `alt`, `title`, placeholders and Carbon props like `labelText`) must come from Paraglide messages: `m.some_key()` from `src/paraglide/messages`.
- When adding a message, add the key to every file in `messages/` (`en.json`, `sv.json`) in the same change.
- Use placeholders for dynamic values (`"card_title": "Card {cardId}"` → `m.card_title({ cardId })`), never string concatenation.
- E2E page objects read text from `messages/*.json` via `this.t`, never hardcoded strings.
