import { test as base, request, type APIRequestContext } from '@playwright/test';
import { env } from '../configs/env.config';

type CoreFixtures = {
  baseURL: string;
  apiContext: APIRequestContext;
};

export const test = base.extend<CoreFixtures>({
  baseURL: async ({}, use) => {
    await use(env.baseUrl);
  },
  apiContext: async ({}, use) => {
    const ctx = await request.newContext({
      baseURL: env.apiBaseUrl,
      extraHTTPHeaders: {
        'x-domain': env.domain
      }
    });
    await use(ctx);
    await ctx.dispose();
  }
});

export { expect } from '@playwright/test';
