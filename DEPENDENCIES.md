# Dependency Decisions

This document records intentional decisions to **hold back** or **deviate from**
the latest version of a dependency, including the reasoning. The goal is to
make it easy to revisit these pins when the constraints that motivated them
change (e.g. a project-wide minimum Node.js bump).

When you add or change an entry here, update both the rationale **and** the
"Revisit when …" trigger so a future maintainer (or Dependabot/Renovate
reviewer) can decide quickly whether the hold-back still applies.

---

## Project Node.js floor

`create-easy-ui5` declares `engines.node: ">=20.17.0"`.

This floor is the strictest Node.js requirement among the runtime and
development dependencies we currently ship — anything less and at least one
dependency will fail to install on the project's published minimum Node.js
version.

| Source of the floor                                            | `engines.node`           |
| -------------------------------------------------------------- | ------------------------ |
| `generator-easy-ui5@3.9.1` (runtime)                           | `>=20`                   |
| `yeoman-environment@5.x` (transitive via `generator-easy-ui5`) | `^20.17.0 \|\| >=22.9.0` |
| `lint-staged@16.x` (dev)                                       | `>=20.17`                |

Node.js 20 is still an actively-maintained LTS line and broadly used in UI5
build environments, so we deliberately stop the floor there instead of
following the newer-major dependencies onto Node 22.

---

## Pinned / held-back dependencies

### `@commitlint/cli` — held at `20.2.0` (latest is `21.x`)

- **Held since:** 2026-06
- **Latest version available:** `21.0.2`
- **Pinned at:** `20.2.0`

#### Rationale

`@commitlint/cli@21` is an engines-only bump that raises the required Node.js
version to `>=22.12.0`, dropping Node.js 20.

| Version              | `engines.node` |
| -------------------- | -------------- |
| `@commitlint/cli@21` | `>=22.12.0`    |
| `@commitlint/cli@20` | `>=v18`        |

`commitlint` is only invoked on the `commit-msg` git hook and in CI — it never
ends up in any consumer's installation. We could in principle let CI run a
Node-22-only commitlint while consumers stay on Node 20, but the simpler story
is to keep the entire repo Node-20-installable so contributors don't need to
juggle Node versions to run the hooks locally.

#### Revisit when …

- The repository raises its supported Node.js floor to `>=22.12.0`, **or**
- `@commitlint/cli@21+` introduces a feature/fix we actually need that we
  cannot get from the v20 line.

When either is true, bump `@commitlint/cli` and `@commitlint/config-conventional`
together to the latest major and remove this entry.

### `@commitlint/config-conventional` — held at `20.2.0` (latest is `21.x`)

Tracks `@commitlint/cli` 1:1 (same publisher, same engines bump in v21). See
the entry above; revisit them together.

---

## Latest-major devDependencies (intentionally **not** held back)

The following development dependencies are pinned to their latest major and
are compatible with Node.js 20.17+:

| Package                        | Range     | `engines.node`                       |
| ------------------------------ | --------- | ------------------------------------ |
| `@changesets/cli`              | `^2.31.0` | `>=14` (none declared, works on 20+) |
| `@changesets/changelog-github` | `^0.7.0`  | none declared                        |
| `cz-conventional-changelog`    | `3.3.0`   | `>=10`                               |
| `husky`                        | `^9.1.7`  | `>=18`                               |
| `lint-staged`                  | `16.4.0`  | `>=20.17`                            |
| `prettier`                     | `^3.8.4`  | `>=14`                               |

They are intentionally **not** held back because they install cleanly on the
project's Node.js floor.

---

## Runtime dependency

| Package              | Range    | `engines.node` |
| -------------------- | -------- | -------------- |
| `generator-easy-ui5` | `^3.9.1` | `>=20`         |

This is the only runtime dependency. It pulls in `yeoman-environment@^5.1.2`
transitively. An open `npm audit` advisory exists against the `yeoman-environment`
2.x–6.x range that `generator-easy-ui5@3` resolves to — this can only be fixed
by an upstream `generator-easy-ui5` release that targets `yeoman-environment` ≥ 6.1.
It is tracked upstream at [`generator-easy-ui5`](https://github.com/SAP/generator-easy-ui5).
