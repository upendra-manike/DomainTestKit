import { expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/common/login.page';

export class PaymentFlow {
  constructor(private readonly page: Page) {}

  async makePayment(email: string, password: string): Promise<void> {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto('/login');
    await loginPage.login(email, password);

    await this.page.click('[data-testid="nav-payments"]');
    await this.page.fill('[data-testid="payment-amount"]', '100');
    await this.page.fill('[data-testid="payment-currency"]', 'USD');
    await this.page.click('[data-testid="payment-submit"]');

    await expect(this.page.locator('[data-testid="payment-status"]')).toHaveText('SUCCESS');
  }
}
