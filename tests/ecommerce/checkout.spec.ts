import { test } from '../../core/baseTest';
import { CheckoutFlow } from '../../domains/ecommerce/checkout.flow';

test.describe('E-commerce Checkout Flow', () => {
  test('checkout successfully', async ({ page }) => {
    const checkoutFlow = new CheckoutFlow(page);
    await checkoutFlow.completeCheckout('SKU-1001');
  });
});
