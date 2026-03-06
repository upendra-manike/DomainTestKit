# Release Process

This project uses semantic versioning and git tags for releases.

## v0.1.0 Release Checklist

- [ ] Ensure `main` is green in GitHub Actions.
- [ ] Run local validation:

```bash
npm ci
npx playwright install --with-deps
npm run typecheck
npm test
```

- [ ] Confirm `CHANGELOG.md` includes the release notes for `0.1.0`.
- [ ] Ensure docs are updated (`README.md`, `CONTRIBUTING.md`, `SECURITY.md`).
- [ ] Commit all release-ready changes to `main`.

## Create and Push Tag

```bash
git checkout main
git pull origin main
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

## Publish GitHub Release

1. Open GitHub Releases for this repo.
2. Click `Draft a new release`.
3. Select tag `v0.1.0`.
4. Use `.github/RELEASE_TEMPLATE.md` content.
5. Publish release.

## Post-Release

- [ ] Verify release artifacts and notes are correct.
- [ ] Confirm installation and quick demo commands still work.
- [ ] Start next cycle by updating changelog placeholders.
