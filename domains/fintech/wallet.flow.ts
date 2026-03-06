import { expect, Page } from '@playwright/test';

export class WalletFlow {
  constructor(private readonly page: Page) {}

  async topUpWallet(amount: number): Promise<void> {
    await this.page.goto('/wallet');
    await this.page.fill('[data-testid="wallet-topup-amount"]', String(amount));
    await this.page.click('[data-testid="wallet-topup-submit"]');
    await expect(this.page.locator('[data-testid="wallet-balance"]')).toContainText(String(amount));
  }
}
