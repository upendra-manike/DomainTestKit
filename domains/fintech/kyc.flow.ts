import { expect, Page } from '@playwright/test';

export class KycFlow {
  constructor(private readonly page: Page) {}

  async submitKyc(idNumber: string): Promise<void> {
    await this.page.goto('/kyc');
    await this.page.fill('[data-testid="kyc-id-number"]', idNumber);
    await this.page.setInputFiles('[data-testid="kyc-document-upload"]', {
      name: 'identity.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('sample-kyc-document')
    });
    await this.page.click('[data-testid="kyc-submit"]');
    await expect(this.page.locator('[data-testid="kyc-status"]')).toHaveText('UNDER_REVIEW');
  }
}
