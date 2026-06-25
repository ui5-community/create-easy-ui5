---
"create-easy-ui5": patch
---

fix: declare `yeoman-environment` as a direct dependency, upgrade to `generator-easy-ui5@^3.10.0`

`index.js` requires `yeoman-environment` directly, but it was only being
resolved transitively via `generator-easy-ui5`. Depending on how npm laid
out the global install tree, that nested copy was not always reachable
from `create-easy-ui5/index.js`, surfacing as `Error: Cannot find module
'yeoman-environment'` on `easy-ui5` startup.

Declare `yeoman-environment` as a direct runtime dep and bump
`generator-easy-ui5` to `^3.10.0`, which itself pins `yeoman-environment@^6.1.0`
— so npm dedupes to a single copy. The `^6.1.0` bump also clears the
previously-known `GHSA-vv9j-gjw2-j8wp` advisory (the workaround that
allowlisted it in the dependency-review gate has been removed).
