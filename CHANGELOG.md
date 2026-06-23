## 1.1.0

### Minor Changes

- [#3](https://github.com/ui5-community/create-easy-ui5/pull/3) [`531c3b0`](https://github.com/ui5-community/create-easy-ui5/commit/531c3b094b905463b083083c53ce984eef69821d) Thanks [@petermuessig](https://github.com/petermuessig)! - Bump minimum Node.js version to 20.17. Required by transitive
  `yeoman-environment@5.x` (engines: `^20.17.0 || >=22.9.0`) which
  `generator-easy-ui5@3.9.1` resolves to, and by `lint-staged@16.x`
  (engines: `>=20.17`). See `DEPENDENCIES.md` for the full rationale.

### Patch Changes

- [#5](https://github.com/ui5-community/create-easy-ui5/pull/5) [`39679b7`](https://github.com/ui5-community/create-easy-ui5/commit/39679b76cb7df60f703a8b62c9d719aa9321debd) Thanks [@petermuessig](https://github.com/petermuessig)! - Harden the repository against Shai-Hulud-class supply-chain attacks:

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

## 1.0.0 (2025-12-29)

- build: update changelog ([6b951e1](https://github.com/ui5-community/create-easy-ui5/commit/6b951e1))
- build: update depenendencies ([5696b04](https://github.com/ui5-community/create-easy-ui5/commit/5696b04))
- 1.0.0 ([aeec02c](https://github.com/ui5-community/create-easy-ui5/commit/aeec02c))
- 1.0.1 ([dc5c80d](https://github.com/ui5-community/create-easy-ui5/commit/dc5c80d))
- Initial commit ([eb18673](https://github.com/ui5-community/create-easy-ui5/commit/eb18673))
- chore: update release process ([8e233af](https://github.com/ui5-community/create-easy-ui5/commit/8e233af))
- fix: bugfix for arguments and polish docs ([29577d1](https://github.com/ui5-community/create-easy-ui5/commit/29577d1))
- fix: run easy-ui5 in embedded mode ([f9e8178](https://github.com/ui5-community/create-easy-ui5/commit/f9e8178))
- feat: fully initalize the repo ([532fc33](https://github.com/ui5-community/create-easy-ui5/commit/532fc33))
