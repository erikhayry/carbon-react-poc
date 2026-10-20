import { createRequire } from "node:module";
import { defineConfig } from "vitest/config"; // <-- Changed from "vite" to "vitest/config"
import { fileURLToPath } from "node:url";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// @carbon/styles is a transitive dependency of @carbon/react, so pnpm does not
// link it at the project root. Resolve it the way @carbon/react would.
const require = createRequire(import.meta.url);
const carbonRequire = createRequire(require.resolve("@carbon/react/package.json"));
const carbonStyles = carbonRequire.resolve("@carbon/styles/css/styles.css");

const dir = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@carbon/styles/css/styles.css": carbonStyles,
      // Keep these in sync with "paths" in tsconfig.app.json
      "@e2e": dir("./e2e"),
      "@test": dir("./test"),
      "@messages": dir("./messages"),
      "@": dir("./src"),
    },
  },
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      // Locale comes from the URL prefix (/en, /sv); falls back to the browser language, then English
      strategy: ["url", "preferredLanguage", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["sv", "/sv/:path(.*)?"],
          ],
        },
      ],
    }),
    // tanstackRouter must come before react()
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  test: {
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    environment: "jsdom",
    include: ["src/**/*.spec.{ts,tsx}"],
  },
});
