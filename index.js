#!/usr/bin/env node

// extract the arguments (remove "easy-ui5" if present)
const args = process.argv.slice(2);
if (args[0] === "easy-ui5") {
  args.splice(0, 1);
}

// create the env for the plugin generator
const yeoman = require("yeoman-environment");
const env = yeoman.createEnv(args, {
  cwd: process.cwd(),
});

// lookup the easy-ui5 generator
const generators = env
  .lookup({
    localOnly: false,
  })
  .filter((sub) => {
    return sub.namespace === "easy-ui5:app";
  });

// finally, run the subgenerator
if (generators[0]?.namespace) {
  env.run([generators[0].namespace].concat(args), {
    // verbose: this.options.verbose,
    embedded: true,
  });
} else {
  console.error(
    "Easy-UI5 cannot be found! Please run 'npm i -g generator-easy-ui5'!"
  );
}
