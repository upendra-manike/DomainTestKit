import { defineConfig, devices } from '@playwright/test';
import { testConfig } from './test.config';

export default defineConfig({
  testDir: './tests',
  timeout: testConfig.timeout,
  retries: testConfig.retries,
  workers: testConfig.workers,
  fullyParallel: true,
  reporter: [
    ['html', { outputFolder: './playwright-report', open: 'never' }],
    ['list'],
    ['allure-playwright', { outputFolder: './allure-results' }]
  ],
  webServer: {
    command: 'node scripts/mock-server.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  use: testConfig.use,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ]
});
