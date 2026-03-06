import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  private normalize(path: string): string {
    return path.startsWith('/') ? path.slice(1) : path;
  }

  async get(path: string): Promise<APIResponse> {
    return this.request.get(this.normalize(path));
  }

  async post(path: string, data: unknown): Promise<APIResponse> {
    return this.request.post(this.normalize(path), { data });
  }

  async put(path: string, data: unknown): Promise<APIResponse> {
    return this.request.put(this.normalize(path), { data });
  }

  async delete(path: string): Promise<APIResponse> {
    return this.request.delete(this.normalize(path));
  }
}
