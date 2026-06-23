# `create-easy-ui5`

[![npm version](https://img.shields.io/npm/v/create-easy-ui5.svg)](https://www.npmjs.com/package/create-easy-ui5)
[![License Status](https://img.shields.io/github/license/ui5-community/create-easy-ui5.svg)](https://github.com/ui5-community/create-easy-ui5/blob/main/LICENSE)
[![REUSE status](https://api.reuse.software/badge/github.com/ui5-community/create-easy-ui5)](https://api.reuse.software/info/github.com/ui5-community/create-easy-ui5)

> `npm-init` wrapper for the [Easy-UI5](https://github.com/SAP/generator-easy-ui5) Yeoman generator.

`create-easy-ui5` is a thin wrapper that makes the Easy-UI5 generator available
through `npm init`, `npx`, and a standalone `easy-ui5` binary — so you can
scaffold a new UI5 project without installing Yeoman or the generator globally
first. It automatically picks up all available
[UI5 Community generators](https://github.com/ui5-community/?q=generator-ui5&type=all&language=&sort=).

## Quick Start

You can use any of the three entry points below — they all do the same thing.
Pick whichever fits your workflow.

```sh
# 1. via npm init (no install required)
npm init easy-ui5 [template]

# 2. via npx (no install required)
npx create-easy-ui5 [template]

# 3. via the installed binary
npm install -g create-easy-ui5
easy-ui5 [template]
```

If you omit `[template]`, Easy-UI5 will prompt you to pick one interactively.

## Requirements

- **Node.js ≥ 20.17** (LTS). See [DEPENDENCIES.md](DEPENDENCIES.md) for the
  rationale behind this floor.

## How it works

`create-easy-ui5` does three things on every invocation:

1. Creates a fresh Yeoman environment in the current working directory.
2. Looks up the `easy-ui5:app` generator from `generator-easy-ui5` (or any
   compatible generator already installed locally / globally).
3. Hands control over to that generator, forwarding any CLI arguments you
   passed in.

That's it — the actual project scaffolding, prompts, and template logic all
live in [`generator-easy-ui5`](https://github.com/SAP/generator-easy-ui5) and
the [UI5 Community generators](https://github.com/ui5-community/?q=generator-ui5).
If you hit something that looks like a template bug, please report it there.

## Documentation & Templates

- [Easy-UI5 generator](https://github.com/SAP/generator-easy-ui5) — the
  upstream Yeoman generator this wrapper drives.
- [UI5 Community generators](https://github.com/ui5-community/?q=generator-ui5&type=all&language=&sort=)
  — a catalogue of available `[template]` values.
- [SAPUI5/OpenUI5 documentation](https://sdk.openui5.org/) — UI5 framework
  reference.

## Support

This project is community-maintained. The best places to get help are:

- 🐛 **Bug reports & feature requests:** the [issue tracker](https://github.com/ui5-community/create-easy-ui5/issues).
- 💬 **General UI5 questions:** the [`#tooling`](https://openui5.slack.com/archives/C0A7QFN6B) channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) or [Stack Overflow](https://stackoverflow.com/questions/tagged/ui5).

Please read the [issue reporting guidelines](CONTRIBUTING.md#-reporting-issues)
before opening an issue.

## Contributing

Contributions of any kind — bug reports, fixes, doc improvements, ideas —
are warmly welcomed.

- [CONTRIBUTING.md](CONTRIBUTING.md) — how to set up, what we expect from
  pull requests, commit message rules, and the changeset-based release flow.
- [DEPENDENCIES.md](DEPENDENCIES.md) — why some dependencies are pinned;
  consult this before bumping anything.
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — the Contributor Covenant we
  follow.

## Release Process

This repository uses [Changesets](https://github.com/changesets/changesets)
for versioning and automated publishing to npm. See the
[Releasing the Package](CONTRIBUTING.md#-releasing-the-package) section in
the contributor guide.

## License

This project is licensed under the [Apache Software License, Version 2.0](LICENSE),
except as noted otherwise in the LICENSE file.
