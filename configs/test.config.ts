import { env } from './env.config';

export const testConfig = {
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  use: {
    baseURL: env.baseUrl,
    trace: 'retain-on-failure' as const,
    screenshot: 'only-on-failure' as const,
    video: 'retain-on-failure' as const,
    headless: env.headless
  }
};
