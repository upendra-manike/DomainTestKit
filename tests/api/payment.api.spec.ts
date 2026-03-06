import { expect } from '../../core/baseTest';
import { test } from '../../core/baseTest';
import { ApiClient } from '../../core/apiClient';
import { PaymentApi } from '../../api/payment.api';

test.describe('Payment API', () => {
  test('create payment returns success status', async ({ apiContext }) => {
    const apiClient = new ApiClient(apiContext);
    const paymentApi = new PaymentApi(apiClient);

    const status = await paymentApi.createPayment(100, 'USD');
    expect([200, 201, 202]).toContain(status);
  });
});
