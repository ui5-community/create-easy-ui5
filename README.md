# npm-init wrapper for Easy-UI5

[![License Status][license-image]][license-url]

This NPM package wraps [Easy-UI5](https://github.com/SAP/generator-easy-ui5) Yeoman generator in [`npm-init`](https://docs.npmjs.com/cli/v8/commands/npm-init), [`npx`](https://docs.npmjs.com/cli/v8/commands/npx) or even just a binary. It automatically benefits from all the available [UI5 Community generators](https://github.com/ui5-community/?q=generator-ui5&type=all&language=&sort=).

## Getting Started

This NPM packages just adds a few more options to use the Easy-UI5 Yeoman generator - but even a bit easier...

### Option 1: Using `npm-init`

The [`npm-init`](https://docs.npmjs.com/cli/v8/commands/npm-init) command is used to setup new repositories. You can use the `create-easy-ui5` package for `npm-init` like this:

```sh
npm init easy-ui5 [template]
```

The `create-easy-ui5` package doesn't need to be installed upfront to be used as `npm-init` is downloading it automatically from the central NPM registry.

### Option 2: Using `npx`

The [`npx`](https://docs.npmjs.com/cli/v8/commands/npx) command is used to run NPM packages directly and can be used to run the setup script:

```sh
npx create-easy-ui5 [template]
```

The `create-easy-ui5` package doesn't need to be installed upfront to be used as `npm-init` is downloading it automatically from the central NPM registry.

### Option 3: Using `easy-ui5` binary

The `easy-ui5` binary is provided by the `create-easy-ui5` NPM package and once installed it can be used to setup new repositories using the Easy-UI5 Yeoman generator:

```sh
# Install create-easy-ui5
npm i -g create-easy-ui5

# Run the binary
easy-ui5 [template]
```

## Support

Please use the GitHub bug tracking system to post questions, bug reports or to create pull requests.

## Contributing

We welcome any type of contribution (code contributions, pull requests, issues) to this generator equally.

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the LICENSE file.

[license-image]: https://img.shields.io/github/license/ui5-community/create-easy-ui5.svg
[license-url]: https://github.com/ui5-community/create-easy-ui5/blob/main/LICENSE
