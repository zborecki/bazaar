/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12 Pro'] }
    }
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: './__playwright__',
  use: {
    baseURL: 'http://localhost:9997',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run start',
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:9997'
  },
  workers: process.env.CI ? 1 : undefined
});
