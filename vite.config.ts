import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config"; // <-- Changed from "vite" to "vitest/config"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    environment: "jsdom",
    include: ["src/**/*.spec.{ts,tsx}"],
  },
});
