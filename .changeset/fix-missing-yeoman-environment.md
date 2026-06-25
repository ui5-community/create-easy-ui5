---
"create-easy-ui5": patch
---

fix: declare `yeoman-environment` as a direct dependency

`index.js` requires `yeoman-environment`, but it was only being resolved transitively via `generator-easy-ui5`. Depending on how npm laid out the global install, that nested copy wasn't always reachable from `create-easy-ui5/index.js`, causing `Error: Cannot find module 'yeoman-environment'` on `easy-ui5` startup. Declaring it directly (pinned to the same `^5.1.2` range `generator-easy-ui5` uses, so npm dedupes to one copy) makes resolution deterministic.
