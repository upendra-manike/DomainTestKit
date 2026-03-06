import { test, expect } from '../../core/baseTest';

test.describe('Visual Regression', () => {
  test('home page visual snapshot', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
});
