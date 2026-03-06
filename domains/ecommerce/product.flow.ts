import { expect, Page } from '@playwright/test';

export class ProductFlow {
  constructor(private readonly page: Page) {}

  async searchProduct(productName: string): Promise<void> {
    await this.page.goto('/products');
    await this.page.fill('[data-testid="product-search"]', productName);
    await this.page.click('[data-testid="product-search-submit"]');

    await expect(this.page.locator('[data-testid="product-result-name"]')).toContainText(productName);
  }
}
