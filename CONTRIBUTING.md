# Contributing to DomainTestKit

Thanks for your interest in contributing.

## Development Setup

1. Install dependencies:

```bash
npm ci
```

2. Install Playwright browsers:

```bash
npx playwright install --with-deps
```

3. Run tests:

```bash
npm test
```

## Branch and Commit Guidelines

- Create a feature branch from `main`.
- Keep commits focused and small.
- Use clear commit messages.

## Pull Request Checklist

- Add or update tests for behavior changes.
- Run `npm run typecheck` and `npm test` locally.
- Update docs when behavior or setup changes.
- Keep PR description clear and include before/after context.

## Code Style

- TypeScript strict mode is enabled.
- Prefer simple, readable abstractions over deep inheritance.
- Keep domain flow methods business-focused and reusable.
