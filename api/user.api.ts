import { ApiClient } from '../core/apiClient';

export class UserApi {
  constructor(private readonly apiClient: ApiClient) {}

  async getUser(userId: string): Promise<number> {
    const response = await this.apiClient.get(`/users/${userId}`);
    return response.status();
  }
}
