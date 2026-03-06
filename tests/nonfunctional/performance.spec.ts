import { test, expect } from '../../core/baseTest';

test.describe('Performance Baseline', () => {
  test('DOMContentLoaded should be under threshold', async ({ page, baseURL }) => {
    const start = Date.now();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(4_000);
  });
});
