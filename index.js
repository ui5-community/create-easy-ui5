#!/usr/bin/env node

// extract the arguments after the first occurrence of easy-ui5
let include = false;
const args = process.argv.reduce((currentValue, element) => {
  if (include) {
    currentValue.push(element);
  } else {
    if (element.includes("easy-ui5")) {
      include = true;
    }
  }
  return currentValue;
}, []);

// create the env for the plugin generator
const yeoman = require("yeoman-environment");
const env = yeoman.createEnv(args, {
  cwd: process.cwd(),
});

// lookup the easy-ui5 generator
const generators = env
  .lookup({
    localOnly: true,
  })
  .filter((sub) => {
    return sub.namespace === "easy-ui5:app";
  });

// finally, run the subgenerator
env.run([generators[0].namespace].concat(args), {
  // verbose: this.options.verbose,
  embedded: true,
});
