---
"create-easy-ui5": patch
---

Harden the repository against Shai-Hulud-class supply-chain attacks:

- Pin every GitHub Action to a commit SHA (with a tag comment for
  visibility).
- Install dependencies with `npm ci --ignore-scripts` in CI; set
  `HUSKY_SKIP` so our own `prepare` script doesn't run there either.
- Add `dependency-review-action` to the PR pipeline (fails on
  high-severity advisories).
- Add `.github/dependabot.yml` for the `npm` and `github-actions`
  ecosystems with weekly cadence and grouped patch/minor PRs.
- Add `.npmrc` with `engine-strict=true`, `save-exact=true`,
  `package-lock=true`.
- Add a `"files": ["index.js"]` allow-list to `package.json` — the
  published tarball is now exactly `index.js`, `package.json`,
  `README.md`, and `LICENSE`.
- New `SECURITY.md` documenting the controls and the out-of-band
  hardening still to be done in the GitHub/npm UI.
