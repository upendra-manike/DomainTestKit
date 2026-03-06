import { test } from '../../core/baseTest';

test.describe('Security Baseline', () => {
  test.skip('OWASP ZAP baseline runs via npm run zap:baseline in CI security stage', async () => {
    // Intentionally skipped in Playwright run; execute script separately.
  });
});
