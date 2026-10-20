import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config"; // <-- Changed from "vite" to "vitest/config"

// https://vite.dev/config/
export default defineConfig({
  // tanstackRouter must come before react()
  plugins: [tanstackRouter({ target: "react", autoCodeSplitting: true }), react()],
  test: {
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    environment: "jsdom",
    include: ["src/**/*.spec.{ts,tsx}"],
  },
});
