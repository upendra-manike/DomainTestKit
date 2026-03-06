import { test } from '../../core/baseTest';
import { PaymentFlow } from '../../domains/fintech/payment.flow';

test.describe('FinTech Payment Flow', () => {
  test('successful payment', async ({ page }) => {
    const paymentFlow = new PaymentFlow(page);
    await paymentFlow.makePayment('fintech.user@example.test', 'replace-me');
  });
});
