import { expect, Page } from '@playwright/test';

export class CheckoutFlow {
  constructor(private readonly page: Page) {}

  async completeCheckout(productId: string): Promise<void> {
    await this.page.goto(`/products/${productId}`);
    await this.page.click('[data-testid="add-to-cart"]');
    await this.page.goto('/checkout');
    await this.page.click('[data-testid="place-order"]');

    await expect(this.page.locator('[data-testid="order-status"]')).toHaveText('ORDER_CONFIRMED');
  }
}
