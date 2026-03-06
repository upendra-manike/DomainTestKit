import { ApiClient } from '../core/apiClient';

export class PaymentApi {
  constructor(private readonly apiClient: ApiClient) {}

  async createPayment(amount: number, currency: string): Promise<number> {
    const response = await this.apiClient.post('/payments', { amount, currency });
    return response.status();
  }
}
