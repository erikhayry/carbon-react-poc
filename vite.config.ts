import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config"; // <-- Changed from "vite" to "vitest/config"

// https://vite.dev/config/
export default defineConfig({
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
