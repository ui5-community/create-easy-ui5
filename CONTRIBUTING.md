# Contributing to `create-easy-ui5`

## Content

1. [📝 **Reporting Issues**](#-reporting-issues)
2. [🤩 **Feature Requests**](#-feature-requests)
3. [🔍 **Analyzing Issues**](#-analyzing-issues)
4. [💻 **Contributing Code**](#-contributing-code)
5. [📦 **Releasing Package**](#-releasing-package)

## 📝 Reporting Issues

### Seeking Help / Not a Bug

If you need help setting something up, or if you have questions regarding `create-easy-ui5`, please seek help on a community platform like [StackOverflow](http://stackoverflow.com/questions/tagged/ui5) or the [`#tooling`](https://openui5.slack.com/archives/C0A7QFN6B) channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).

### How to Report an Issue

1. **Only `create-easy-ui5` issues**
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

When you are ready, report your issue here: https://github.com/ui5-community/create-easy-ui5/issues/new

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

We want to improve the quality of the UI5 Communtiy projects and good bug reports are welcome! But keep in mind that this here is spare-time work and thus the capacity is limited.

Therefore, we reserve the right to close or to not process insufficient bug reports in favor of those which are clearly documented and easy to reproduce. Even though we would like to solve each well-documented issue, there is always the chance that it won't happen - please remember: The UI5 Community projects are Open Source and comes without warranty.

Bug report analysis support is always very welcome! See [Analyze Issues](#-analyzing-issues).

## 🤩 Feature Requests

You can request most features by creating an issue in the repository: https://github.com/ui5-community/create-easy-ui5/issues/new

## 🔍 Analyzing Issues

Analyzing issue reports can be a lot of effort. Any help is welcome! 👍

You may be able to add additional or missing information, such as a step-by-step guide on how to reproduce an issue or an analysis of the root cause. In case of the latter, you might even be able to [contribute](#-contributing-code) a bugfix. 🙌

## 💻 Contributing Code

### General Remarks

You are welcome to contribute code to the project in order to fix bugs or to implement new features.

There are three important things to know:

1. You must be aware of the Apache License (which describes contributions).
2. **Not all proposed contributions can be accepted**. Some features may just fit a third-party add-on better. The code must match the overall direction of the project and improve it. Before contributing a feature, please open a feature request upfront to discuss the necessity of the feature with the core contributors.

### How to Contribute

1. Make sure the change is welcome (see [General Remarks](#general-remarks)).
2. Create a branch by forking the relevant module repository and apply your change.
3. Commit and push your change on that branch.
4. Create a pull request in the relevant repository.
5. Wait for our code review and approval, possibly enhancing your change on request.
6. Once the change has been approved and merged, we will inform you in a comment.
7. Let's celebrate together! 🎉

#### Requirements

The technical requirements to contribute to the project are the following:

- A current version of [Node.js](https://nodejs.org/)
- A code editor (preferably the free [Microsoft Visual Studio Code](https://code.visualstudio.com/))

#### Getting Started

To get started contributing to this project you need to do the following steps:

- Clone the repository
- Run `npm install`

#### Commit Messages format

This project enforces the [conventional-commits][conventional_commits] commit message formats.
The possible commits types prefixes are limited to those defined by [conventional-commit-types][commit_types].
This promotes a clean project history and enabled automatically generating a changelog.

The commit message format will be inspected both on a git pre-commit hook
and during the central CI build and will **fail the build** if issues are found.

#### Formatting

[Prettier](https://prettier.io/) is used for some of the sub-packages to do a proper code formatting. The formatting is running as part of the `pre-commit` hook.

#### Compiling

This project is implemented using plain ECMAScript without any compilation / transpilation steps.

#### Testing

There is no testing tooling used for this repository so for. To test the project the simplest way is to run it:

```sh
# run the project
npm start
```

## 📦 Release Package

This repository uses [Lerna](https://github.com/lerna/lerna) to manage the release process.

### Release Process

First, make sure that you pull the latest state of the GitHub repository and then proceed with the following steps:

1. Update the version: `npm version patch|minor|major`
2. Update the changelog: `npm run changelog`, commit and amend the version change from step 1: `git add . && git commit --amend --no-edit`
3. Push the new commit and tag: `git push origin --tags`
4. Inspect the newly artifacts published on npmjs.com.

A GitHub action will do the needful once the new tag has been pushed.

### Upgrading the version of the dependencies

To upgrade the version of the dependencies the NPM package `npm-check-updates` is used. The following code snippets shows how to use it:

```bash
# install the npm-check-updates
npm install -g npm-check-updates

# check for dependencies to be updated
ncu

# update the dependencies automatically
ncu -u
```

Be careful with major version changes of the dependencies as this might cause additional work to make the package running again.
