import { expect } from '@playwright/test';
import { BasePage } from '../../core/basePage';

export class DashboardPage extends BasePage {
  async verifyLoaded(): Promise<void> {
    await expect(this.page.locator('[data-testid="dashboard-root"]')).toBeVisible();
  }
}
