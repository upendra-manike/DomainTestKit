# DomainTestKit

[![CI](https://github.com/upendra-manike/DomainTestKit/actions/workflows/ci.yml/badge.svg)](https://github.com/upendra-manike/DomainTestKit/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Playwright](https://img.shields.io/badge/Playwright-E2E-2EAD33)](https://playwright.dev)

DomainTestKit is a domain-ready Playwright framework designed for enterprise quality engineering in FinTech, Healthcare, and E-commerce systems.

It provides a single test platform for:

- UI automation
- API testing
- Database validation hooks
- Security baseline checks
- Accessibility testing
- Visual regression
- Performance smoke checks
- CI/CD and Docker execution

## Vision

Most Playwright repositories stop at UI tests. DomainTestKit is structured as a unified quality layer with domain business flows and production-ready infrastructure.

## Architecture

The framework follows four layers:

1. Test Layer: executable test specs
2. Domain Layer: business flows (payment, appointment, checkout)
3. Core Automation Layer: base test, base page, API client, fixtures
4. Infrastructure Layer: config, CI, reporting, Docker, security scripts

Conceptual flow:

```text
Tests
	-> Domain Modules
	-> Automation Core
	-> Infrastructure and CI
```

## Project Structure

```text
DomainTestKit
├── .github/workflows/ci.yml
├── api
│   ├── payment.api.ts
│   └── user.api.ts
├── configs
│   ├── env.config.ts
│   ├── playwright.config.ts
│   └── test.config.ts
├── core
│   ├── apiClient.ts
│   ├── basePage.ts
│   ├── baseTest.ts
│   ├── browserManager.ts
│   └── logger.ts
├── database
│   ├── dbClient.ts
│   └── validation.ts
├── docker
│   └── Dockerfile
├── domains
│   ├── ecommerce
│   │   ├── checkout.flow.ts
│   │   └── product.flow.ts
│   ├── fintech
│   │   ├── kyc.flow.ts
│   │   ├── payment.flow.ts
│   │   └── wallet.flow.ts
│   └── healthcare
│       ├── appointment.flow.ts
│       └── patient.flow.ts
├── fixtures
│   ├── auth.fixture.ts
│   └── user.fixture.ts
├── pages/common
│   ├── dashboard.page.ts
│   └── login.page.ts
├── scripts
│   └── zap-baseline.sh
├── testdata
│   ├── products.json
│   └── users.json
├── tests
│   ├── api/payment.api.spec.ts
│   ├── ecommerce/checkout.spec.ts
│   ├── fintech/payment.spec.ts
│   ├── healthcare/appointment.spec.ts
│   ├── nonfunctional
│   │   ├── accessibility.spec.ts
│   │   ├── performance.spec.ts
│   │   └── visual.spec.ts
│   └── security/zap.spec.ts
├── utils
│   ├── dataGenerator.ts
│   └── encryption.ts
├── .env.example
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Quick Start

### 1. Install dependencies

```bash
npm ci
```

### 2. Install Playwright browsers

```bash
npx playwright install --with-deps
```

### 3. Configure environment

```bash
cp .env.example .env
```

Update `.env` values for your target environment.

### 4. Run tests

```bash
npm test
```

## Quick Demo

```bash
npm ci
npx playwright install --with-deps
npx playwright test tests/fintech tests/healthcare tests/ecommerce --project=chromium --workers=1
npx playwright show-report
```

## Run By Suite

```bash
npm run test:fintech
npm run test:healthcare
npm run test:ecommerce
npm run test:api
npm run test:nonfunctional
```

## Domain Flow Pattern

Tests remain simple while domain flows encapsulate business logic.

```ts
test('successful payment', async ({ page }) => {
	const paymentFlow = new PaymentFlow(page);
	await paymentFlow.makePayment('fintech.user@example.test', 'replace-me');
});
```

## Secure Data Handling

The framework supports secure test-data practices:

- environment-based secrets (`.env`)
- encryption utility in `utils/encryption.ts`
- dynamic test user generation in `utils/dataGenerator.ts`
- non-production masked sample data in `testdata/`

## Reporting

Built-in reporters:

- Playwright HTML report
- Allure results output

Commands:

```bash
npm run report
npm run allure:generate
npm run allure:open
```

Artifacts are available in `playwright-report/`, `allure-results/`, and `reports/`.

## CI/CD

GitHub Actions pipeline is included in `.github/workflows/ci.yml`.

Pipeline steps:

1. Install dependencies
2. Install browsers
3. Run test suite
4. Upload reports as artifacts

## Docker Execution

Build image:

```bash
docker build -f docker/Dockerfile -t domain-test-kit .
```

Run tests in container:

```bash
docker run --rm domain-test-kit
```

## Advanced Capabilities

- Visual regression via screenshot assertions
- Accessibility checks with `axe-playwright`
- Performance baseline smoke checks
- Security baseline script using OWASP ZAP

Run ZAP baseline:

```bash
npm run zap:baseline
```

## Notes For Open Source Growth

Recommended next steps for stronger adoption:

1. Add real sample apps under `examples/`
2. Add domain-specific API contracts and mock servers
3. Add DB adapters (PostgreSQL, MySQL) in `database/`
4. Add Slack/Teams test-result notifications
5. Add contribution guide and code owners

## Community and Governance

- Contribution guide: `CONTRIBUTING.md`
- Code of Conduct: `CODE_OF_CONDUCT.md`
- Security policy: `SECURITY.md`
- Changelog: `CHANGELOG.md`
- Issue templates: `.github/ISSUE_TEMPLATE/`
- Pull request template: `.github/pull_request_template.md`
- Code owners: `.github/CODEOWNERS`
- Release checklist: `RELEASE_PROCESS.md`
- Release template: `.github/RELEASE_TEMPLATE.md`

## License

MIT