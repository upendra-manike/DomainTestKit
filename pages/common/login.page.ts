import { BasePage } from '../../core/basePage';

export class LoginPage extends BasePage {
  async login(email: string, password: string): Promise<void> {
    await this.type('[data-testid="email"]', email);
    await this.type('[data-testid="password"]', password);
    await this.click('[data-testid="login-submit"]');
  }
}
