import { test } from '../../core/baseTest';
import { AppointmentFlow } from '../../domains/healthcare/appointment.flow';

test.describe('Healthcare Appointment Flow', () => {
  test('book appointment successfully', async ({ page }) => {
    const appointmentFlow = new AppointmentFlow(page);
    await appointmentFlow.bookAppointment('P-1001', '2026-03-10T10:00:00Z');
  });
});
