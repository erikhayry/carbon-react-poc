# Agent rules

## Components

- Never add a `className` prop to a component (in its props type, destructuring, or pass-through to children) unless the user explicitly asks for it in that request. Styling is handled inside the component.

## Styling (CSS)

- Never write CSS unless the user explicitly asks for it in that request. That covers new `.css`/`.scss` files, new rules or declarations in `src/index.css`, inline `style={{ ... }}` props, and CSS-in-JS.
- Build UI out of Carbon components (`@carbon/react`) and their own props instead. If Carbon cannot express a layout or look without CSS, say so and ask rather than adding styles.
- When CSS _is_ asked for, prefer overriding Carbon theme tokens (`--cds-*` in `src/index.css`) over writing rules that target Carbon's internal class names.

## Types (Zod)

- Always define types with Zod schemas. Never hand-write an `interface` or a standalone `type` alias for data or props; declare the schema and derive the type from it.
- Naming convention: the schema is `const <Type>Schema`, the type is `type <Type> = z.infer<typeof <Type>Schema>`, e.g. `const CardPropsSchema = z.object({ ... })` and `export type CardProps = z.infer<typeof CardPropsSchema>`.
- Compose schemas from other schemas (`.extend()`, `.pick()`, nesting) instead of duplicating fields.
- Values Zod cannot describe structurally (e.g. `ReactNode`) get a `z.custom<T>()` schema in `src/types/custom.tsx` so the convention still holds.
- Exceptions: generated files (`src/routeTree.gen.ts`) and third-party module augmentation (`declare module` blocks, e.g. TanStack Router's `Register` interface) must stay plain TypeScript.

## E2E tests (Playwright)

- Always use the Page Object Model. Each page gets its own folder under `e2e/pages/` holding the page object and a `test/` folder with its spec, e.g. `e2e/pages/login/login-page.ts` and `e2e/pages/login/test/login.spec.ts`. One class per page, extending `AppPage` for the shared layout; `AppPage` itself stays at `e2e/pages/app-page.ts`.
- A spec covers the page it sits next to. Do not add cross-page specs at the `e2e/` root.
- Specs must not contain raw selectors (`page.getByRole`, `page.locator`, etc.) or URL strings. Locators, paths and actions belong in page objects; specs only call page objects and make assertions.
- Assertions (`expect`) stay in the specs, not in page objects.

## Imports

- Imports must be sorted alphabetically, enforced by oxlint's `sort-imports` rule (`pnpm lint`).
- The rule sorts on the first imported binding, not the module path, and is case-sensitive: `import { AppPage } from "@e2e/pages/app-page"` comes before `import { z } from "zod"`, and uppercase bindings sort before lowercase ones. Do not group external packages apart from `@/` imports.
- Declarations are ordered by syntax first, then by binding: side-effect only (`import "@/index.css"`), then namespace (`import * as x`), then multi-member, then single-member.
- Members inside a declaration are sorted too (`{ Heading, Section, Stack, Tile }`); `oxlint --fix` fixes member order, declaration order is manual.
- Import through the path aliases (`@/`, `@e2e/`, `@test/`, `@messages/`), never relative paths.

## Translations (Paraglide)

- Never hardcode user-facing text in components or routes. All UI text (including `aria-label`, `alt`, `title`, placeholders and Carbon props like `labelText`) must come from Paraglide messages: `m.some_key()` from `src/paraglide/messages`.
- When adding a message, add the key to every file in `messages/` (`en.json`, `sv.json`) in the same change.
- Use placeholders for dynamic values (`"card_title": "Card {cardId}"` → `m.card_title({ cardId })`), never string concatenation.
- E2E page objects read text from `messages/*.json` via `this.t`, never hardcoded strings.
