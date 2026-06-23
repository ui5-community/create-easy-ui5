# Security

## Reporting a vulnerability

Please **do not** open a public issue for security-sensitive reports.

Send a private report via GitHub's
[security advisory form](https://github.com/ui5-community/create-easy-ui5/security/advisories/new)
or — if that is not available to you — email the repository maintainers
directly (see [package.json](package.json) for the current maintainer
listing). We aim to acknowledge reports within 5 working days.

## Supply-chain hardening

`create-easy-ui5` is a thin npm package: a single 30-line `index.js` plus a
runtime dependency on [`generator-easy-ui5`](https://github.com/SAP/generator-easy-ui5).
Even so, anything published to npm under the same maintainer account is a
potential target of supply-chain worms such as the **Shai-Hulud** campaign
that surfaced in late 2025 (compromise a maintainer's machine → harvest
tokens during `npm install` via a `postinstall` script → republish
trojanized patches of the maintainer's other packages).

The controls listed below exist specifically to limit the blast radius of
such an attack. **Please do not silently undo them** — if a control gets in
the way, raise it on the corresponding control's rationale below first.

### Controls already in place

| #   | Control                                                                                                                  | Where                                                                                                | What it defends against                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **GitHub Actions pinned to commit SHA** with the tag in a trailing comment, e.g. `actions/checkout@de0fac2e... # v6.0.2` | [`.github/workflows/*.yml`](.github/workflows/)                                                      | An action repo (or its publisher) being compromised. A SHA pin cannot silently change underneath us — the tag comment is informational only.                                |
| 2   | **`npm ci --ignore-scripts`** in every CI install                                                                        | [release.yml](.github/workflows/release.yml), [changeset.yml](.github/workflows/changeset.yml)       | Postinstall/prepare scripts in our dep tree running attacker code in a context that has access to repo and npm tokens. This is the Shai-Hulud foothold.                     |
| 3   | **`HUSKY_SKIP: true`** in every CI workflow                                                                              | all workflows                                                                                        | Our own `prepare` script (`husky` install) running unnecessarily in CI, which would otherwise execute `npm prepare` in a token-bearing environment.                         |
| 4   | **`npm ci`** (not `npm install`)                                                                                         | both CI workflows                                                                                    | Lockfile drift / silent version-range upgrades pulling a freshly republished, trojanized package.                                                                           |
| 5   | **`engine-strict=true`** + `save-exact=true`                                                                             | [.npmrc](.npmrc)                                                                                     | A dep silently bumping its Node-engines floor; range carets letting an attacker publish a higher version inside the same range and have everyone pick it up.                |
| 6   | **`"files": ["index.js"]`** publish allow-list                                                                           | [package.json](package.json)                                                                         | Accidentally publishing a stray `.env`, `.git/`, or arbitrary file from the working tree. The tarball ships exactly `index.js`, `package.json`, `README.md`, and `LICENSE`. |
| 7   | **OIDC trusted publishing** with **`NPM_CONFIG_PROVENANCE: "true"`**                                                     | [release.yml](.github/workflows/release.yml)                                                         | Long-lived static npm tokens being exfiltrated and re-used; consumers can verify provenance via `npm` against the GitHub Actions run that built the artifact.               |
| 8   | **Least-privilege workflow permissions**, declared per job                                                               | all workflows                                                                                        | A compromised step having more access than it needs (e.g. write to issues when it only needs to read content).                                                              |
| 9   | **Dependabot** for `npm` and `github-actions` ecosystems                                                                 | [.github/dependabot.yml](.github/dependabot.yml)                                                     | Stale pinned action SHAs and unreviewed transitive advisory drift; both groups land as reviewable PRs (with prefix `chore:` / `ci:` for clean changesets).                  |
| 10  | **`dependency-review-action`** on every PR                                                                               | [changeset.yml](.github/workflows/changeset.yml)                                                     | A PR introducing a dep with a known high-severity advisory; fails before merge.                                                                                             |
| 11  | **Conventional-commit + changeset gates**                                                                                | [commitlint.yml](.github/workflows/commitlint.yml), [changeset.yml](.github/workflows/changeset.yml) | Sneaky "drive-by" merges; every change is documented and surfaces in `CHANGELOG.md`.                                                                                        |

### Out-of-band controls (configured outside this repo)

These are not enforceable from a workflow file and have to be set up in the
GitHub or npm UI. They are documented here so future maintainers can verify
or restore them:

- **Branch protection on `main`** — require PR review, require the
  `Changeset present` and `Lint Commit Message` checks to pass, disallow
  force-pushes, ideally require signed commits.
- **npm package-level 2FA** — set `auth-and-writes` 2FA on the
  `create-easy-ui5` package on npmjs.com.
- **npm trusted publishing** — configure the OIDC trusted-publisher
  relationship for this repo + workflow on npmjs.com. Once that is verified
  end-to-end, **remove** the `NPM_BOOTSTRAP_TOKEN` repository secret; a
  token that exists is a token that can leak.
- **GitHub repository secrets audit** — periodically prune anything not
  actively used by a workflow.

### Known open advisories

The transitive `yeoman-environment@^5.1.2` that `generator-easy-ui5@3.9.1`
resolves to has open `npm audit` advisories that cannot be resolved here;
they require an upstream release of `generator-easy-ui5` that targets
`yeoman-environment@^6.1` or newer. This is tracked in
[DEPENDENCIES.md](DEPENDENCIES.md).
