import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60 * 1000,
  fullyParallel: true,
  retries: 1,
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  use: {
    baseURL: "http://localhost:5174", // Keep this as 5173
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          env: {
            ...process.env,
            VITE_NODE_ENV: "development",
          },
        },
      },
    },
  ],
  // Start dev server before tests
  webServer: {
    command: "pnpm run dev --port 5174 --strictPort",
    port: 5174, // <-- Change this from 5174 to 5173 to match baseURL
    reuseExistingServer: !process.env.CI,
    env: {
      VITE_NODE_ENV: "development",
    },
  },
});
