import dotenv from 'dotenv';

dotenv.config();

export type DomainType = 'fintech' | 'healthcare' | 'ecommerce';

const bool = (input: string | undefined, fallback: boolean): boolean => {
  if (input === undefined) {
    return fallback;
  }
  return input.toLowerCase() === 'true';
};

export const env = {
  baseUrl: process.env.BASE_URL ?? 'http://127.0.0.1:3000',
  apiBaseUrl: process.env.API_BASE_URL ?? 'http://127.0.0.1:3000/api/',
  domain: (process.env.DOMAIN as DomainType) ?? 'fintech',
  headless: bool(process.env.HEADLESS, true),
  testUserEmail: process.env.TEST_USER_EMAIL ?? 'test.user@example.com',
  testUserPassword: process.env.TEST_USER_PASSWORD ?? 'replace-me'
};
