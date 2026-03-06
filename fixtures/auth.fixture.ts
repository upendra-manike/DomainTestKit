import { test as base } from './user.fixture';
import { LoginPage } from '../pages/common/login.page';

type AuthFixture = {
  isAuthenticated: boolean;
};

export const test = base.extend<AuthFixture>({
  isAuthenticated: async ({ page, user }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/login');
    await loginPage.login(user.email, 'replace-me');
    await use(true);
  }
});

export { expect } from './user.fixture';
