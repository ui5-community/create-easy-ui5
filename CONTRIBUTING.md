# Contributing to `create-easy-ui5`

## Content

1. [📝 **Reporting Issues**](#-reporting-issues)
2. [🤩 **Feature Requests**](#-feature-requests)
3. [🔍 **Analyzing Issues**](#-analyzing-issues)
4. [💻 **Contributing Code**](#-contributing-code)
5. [📦 **Releasing the Package**](#-releasing-the-package)

## 📝 Reporting Issues

### Seeking Help / Not a Bug

If you need help setting something up, or if you have questions regarding `create-easy-ui5`, please seek help on a community platform like [StackOverflow](http://stackoverflow.com/questions/tagged/ui5) or the [`#tooling`](https://openui5.slack.com/archives/C0A7QFN6B) channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).

### How to Report an Issue

1. **Only `create-easy-ui5` issues** — if the bug is in a generator template, please open the issue at [`generator-easy-ui5`](https://github.com/SAP/generator-easy-ui5) or the relevant community generator instead.
2. **No duplicate**: You have searched the [issue tracker](https://github.com/ui5-community/create-easy-ui5/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) to make sure the bug has not already been reported.
3. **Good summary**: The summary should be specific to the issue.
4. **Current bug**: The bug can be reproduced in the most current version of the relevant module(s).
5. **Reproducible bug**: There are step-by-step instructions provided on how to reproduce the issue.
6. **Well-documented**:
   - Precisely state the expected and the actual behavior.
   - Give information about the environment in which the issue occurs (OS/Platform, Node.js version, etc.).
   - Generally, give as much additional information as possible.
7. **Only one bug per report**: Open additional tickets for additional issues.
8. **Please report bugs in English.**

We encourage you to follow the issue template that will be presented to you when creating a new issue.

When you are ready, report your issue here: <https://github.com/ui5-community/create-easy-ui5/issues/new>

### Use of Labels

GitHub offers labels to categorize issues. The labels can only be set and modified by committers.

#### General issue categories

- **`bug`**: This issue is a bug in the code.
- **`documentation`**: This issue is about wrong documentation.
- **`enhancement`**: This is not a bug report, but an enhancement request.

#### Status of an open issue

- **`information required`**: The author is required to provide information.
- **`good first issue`**: A newcomer may work on this.
- **`help wanted`**: Additional help in analyzing this issue is required.

#### Status/resolution of a closed issue

- **`duplicate`**: The issue was already reported somewhere else.
- **`invalid`**: For any reason, this issue report will not be handled further. Possible reasons are lack of information, or that the issue does not apply anymore.
- **`wontfix`**: While acknowledged to be an issue, a fix cannot or will not be provided.

### Issue Reporting Disclaimer

We want to improve the quality of the UI5 Community projects and good bug reports are welcome! But keep in mind that this here is spare-time work and thus the capacity is limited.

Therefore, we reserve the right to close or to not process insufficient bug reports in favor of those which are clearly documented and easy to reproduce. Even though we would like to solve each well-documented issue, there is always the chance that it won't happen — please remember: The UI5 Community projects are Open Source and come without warranty.

Bug report analysis support is always very welcome! See [Analyze Issues](#-analyzing-issues).

## 🤩 Feature Requests

You can request features by creating an issue in the repository: <https://github.com/ui5-community/create-easy-ui5/issues/new>

Keep in mind that `create-easy-ui5` is a thin wrapper around the [Easy-UI5 Yeoman generator](https://github.com/SAP/generator-easy-ui5). Feature requests that target template/generator behaviour belong upstream at [`generator-easy-ui5`](https://github.com/SAP/generator-easy-ui5) or at the corresponding [community generator](https://github.com/ui5-community/?q=generator-ui5).

## 🔍 Analyzing Issues

Analyzing issue reports can be a lot of effort. Any help is welcome! 👍

You may be able to add additional or missing information, such as a step-by-step guide on how to reproduce an issue or an analysis of the root cause. In case of the latter, you might even be able to [contribute](#-contributing-code) a bugfix. 🙌

## 💻 Contributing Code

### General Remarks

You are welcome to contribute code to the project in order to fix bugs or to implement new features.

There are two important things to know:

1. You must be aware of the Apache License (which describes contributions).
2. **Not all proposed contributions can be accepted**. Some features may just fit a third-party add-on better. The code must match the overall direction of the project and improve it. Before contributing a feature, please open a feature request upfront to discuss the necessity of the feature with the core contributors.

### Pre-Requisites

- A [Long-Term Support version](https://nodejs.org/en/about/releases/) of Node.js, **≥ 20.17**. See [DEPENDENCIES.md](DEPENDENCIES.md) for the rationale.
- A code editor (preferably the free [Microsoft Visual Studio Code](https://code.visualstudio.com/)).
- (optional) [commitizen](https://github.com/commitizen/cz-cli#installing-the-command-line-tool) for managing commit messages.

### How to Contribute

1. Make sure the change is welcome (see [General Remarks](#general-remarks)).
2. Fork the repository, create a branch, and apply your change.
3. **Add a changeset** describing the change (see [Adding a Changeset](#adding-a-changeset)).
4. Commit and push your change.
5. Create a pull request.
6. Wait for code review and approval, possibly enhancing your change on request.
7. Once the change has been approved and merged, we will inform you in a comment.
8. Let's celebrate together! 🎉

### Getting Started

```sh
# Clone your fork
git clone https://github.com/<you>/create-easy-ui5.git
cd create-easy-ui5

# Install dependencies
npm install

# Run the CLI locally
npm start -- [template]
```

### Commit Messages format

This project enforces the [conventional-commits](https://www.conventionalcommits.org/) commit message formats. The possible commit type prefixes are limited to those defined by [conventional-commit-types](https://github.com/commitizen/conventional-commit-types). This promotes a clean project history.

The commit message format is inspected both on a `commit-msg` git hook and during the central CI build and will **fail the build** if issues are found.

### Formatting

[Prettier](https://prettier.io/) is used for code formatting. Formatting runs automatically on changed files as part of the `pre-commit` hook (`lint-staged`). To format the whole repository manually:

```sh
npm run format
```

### Adding a Changeset

`create-easy-ui5` uses [Changesets](https://github.com/changesets/changesets) for versioning, changelog generation, and publishing. When your PR changes published behaviour, add a changeset:

```sh
npm run changeset
```

Answer the prompts:

- **Bump type** — `patch` (bug fixes, internal refactors with no API impact), `minor` (new functionality, backwards compatible), or `major` (breaking changes).
- **Summary** — one user-facing line that explains the change. This ends up verbatim in `CHANGELOG.md`.

The command writes a file like `.changeset/<random-name>.md`. Commit it together with your code change.

If your PR is docs- or tooling-only and you do not want it to trigger a release, you have two options:

| Option                    | When to use                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `npm run changeset:empty` | Recommended. Writes an empty `.changeset/*.md` file that satisfies the CI changeset gate without producing a release entry.        |
| Don't add a changeset     | Only works if the `Changeset present` CI check is skipped (e.g. on a branch other than `main`). On normal PRs, the gate will fail. |

The [`Changeset present`](.github/workflows/changeset.yml) CI check fails any PR against `main` that ships without a `.changeset/*.md`. It is automatically skipped on the auto-generated `changeset-release/main` PR opened by the release workflow.

### Testing

There is no automated test suite for `create-easy-ui5` — it is a very thin wrapper around `generator-easy-ui5`. To exercise it manually:

```sh
# Run the wrapper against the default Easy-UI5 app generator
npm start

# Or run it from anywhere (after npm link)
npm link
easy-ui5 [template]
```

## 📦 Releasing the Package

This repository uses [Changesets](https://github.com/changesets/changesets) and GitHub Actions to handle releases — **no local `npm version` or push permissions on `main` are required**.

### Release Process

The release flow is fully automated via the [`Release`](.github/workflows/release.yml) workflow:

- When a PR with one or more `.changeset/*.md` files is merged into `main`, the workflow opens (or updates) a single **`Version Packages`** PR. That PR:
  - bumps the version in [package.json](package.json) according to the aggregated bump types,
  - regenerates [CHANGELOG.md](CHANGELOG.md) from the changeset summaries (linked back to the PRs that introduced them via [`@changesets/changelog-github`](https://github.com/changesets/changesets/tree/main/packages/changelog-github)),
  - refreshes [package-lock.json](package-lock.json).
- **Review and merge** that `Version Packages` PR when you want to cut a release.
- On merge, the same workflow publishes the new version to npm — using **OIDC trusted publishing** when configured, with `NPM_BOOTSTRAP_TOKEN` as the fallback — and creates the matching git tag.
- Inspect the newly published artifact on [npmjs.com](https://www.npmjs.com/package/create-easy-ui5).

You can also trigger the workflow manually via **Actions → Release → Run workflow** — useful if a previous run failed mid-publish.

### Upgrading the version of the dependencies

To upgrade dependencies, the NPM package [`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) is recommended:

```bash
# Install npm-check-updates
npm install -g npm-check-updates

# Check for dependencies to be updated
ncu

# Update the dependencies (review the changes before committing)
ncu -u
npm install
```

Before bumping any dependency to a new major, check [DEPENDENCIES.md](DEPENDENCIES.md) — some packages are intentionally held back because their newer majors drop Node.js 20 support.
