import { test } from '../../core/baseTest';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility', () => {
  test('homepage should not have critical accessibility violations', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await injectAxe(page);
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true }
    });
  });
});
