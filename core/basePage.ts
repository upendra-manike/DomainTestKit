import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async type(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  async waitForElement(selector: string): Promise<Locator> {
    const locator = this.page.locator(selector);
    await expect(locator).toBeVisible();
    return locator;
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `reports/screenshots/${name}.png`,
      fullPage: true
    });
  }
}
