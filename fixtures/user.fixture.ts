import { test as base } from '../core/baseTest';
import users from '../testdata/users.json';

export type TestUser = {
  id: string;
  role: string;
  email: string;
};

type UserFixture = {
  user: TestUser;
};

export const test = base.extend<UserFixture>({
  user: async ({}, use) => {
    const primary = users[0] as TestUser;
    await use(primary);
  }
});

export { expect } from '../core/baseTest';
