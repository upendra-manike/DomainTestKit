import { expect, Page } from '@playwright/test';

export class AppointmentFlow {
  constructor(private readonly page: Page) {}

  async bookAppointment(patientId: string, slot: string): Promise<void> {
    await this.page.goto('/appointments/new');
    await this.page.fill('[data-testid="appointment-patient-id"]', patientId);
    await this.page.fill('[data-testid="appointment-slot"]', slot);
    await this.page.click('[data-testid="appointment-book"]');

    await expect(this.page.locator('[data-testid="appointment-status"]')).toHaveText('CONFIRMED');
  }
}
