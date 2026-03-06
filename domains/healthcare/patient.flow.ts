import { expect, Page } from '@playwright/test';

export class PatientFlow {
  constructor(private readonly page: Page) {}

  async registerPatient(name: string, dob: string): Promise<void> {
    await this.page.goto('/patients/new');
    await this.page.fill('[data-testid="patient-name"]', name);
    await this.page.fill('[data-testid="patient-dob"]', dob);
    await this.page.click('[data-testid="patient-save"]');

    await expect(this.page.locator('[data-testid="patient-status"]')).toHaveText('REGISTERED');
  }
}
