[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native

Developer documentation

**Package renamed**  
New package name: `react-native-cross-components`

These are some of the common use components [Crossplatform](https://www.crossplatform.se/) use in our projects.

---

[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-components.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-components.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-components.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-components)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse)

## Table of Contents
- [Crossplatform React-Native](#crossplatform-react-native)
  * [Table of Contents](#table-of-contents)
  * [Install](#install)
  * [Can not run ShellScript](#can-not-run-shellscript)
- [Tools](#tools)
  * [Java](#java)
  * [Git](#git)
    + [Git Credential Manager](#git-credential-manager)
  * [Node](#node)
  * [Yarn](#yarn)
  * [Visual Studio Code](#visual-studio-code)
- [Scripts](#scripts)
  * [yarn dev](#yarn-dev)
  * [yarn read-sh](#yarn-read-sh)
  * [yarn install-globals](#yarn-install-globals)
  * [yarn lint](#yarn-lint)
  * [yarn build](#yarn-build)
  * [yarn build-watch](#yarn-build-watch)
  * [yarn start](#yarn-start)
  * [yarn test-watch](#yarn-test-watch)
  * [yarn test](#yarn-test)
  * [yarn docs](#yarn-docs)
  * [npm-version](#npm-version)
- [Debugging](#debugging)
- [Release](#release)
  * [Publish new version](#publish-new-version)
    + [Publish GitHub documentation](#publish-github-documentation)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Install

Install with [react-native-paper](https://github.com/callstack/react-native-paper) if you don't already have it.

**Package renamed**  
Previous package name: `@crossplatform/react-native-components`  
New package name: `react-native-cross-components`

```bash
	npm i react-native-paper
	npm i react-native-cross-component
```

Or if you're hanging with the cool kids

```bash
	yarn add react-native-paper
	yarn add react-native-cross-component
```

## Can not run ShellScript

Adjust the rights on SH-files for your user (in root). Remarks: we use **[bash terminal in VS Code](#bash-on-windows)**

```bash
    yarn read-sh
```

Or manually:

```bash
	sudo find . -name "\*.sh" | xargs chmod u+x
```

# Tools

## Java

We use **version 8** of the Java JDK. On OSX, remove any older versions according to this process

https://stackoverflow.com/questions/46770453/java-error-when-using-git-credential-manager-in-mac-on-osx

```bash
    brew cask remove java
    sudo rm -rf "/Library/Internet Plug-Ins/JavaAppletPlugin.plugin"
    sudo rm -rf "/Library/PreferencePanes/JavaControlPanel.prefPane"
    sudo rm -rf "~/Library/Application Support/Oracle"
    sudo rm -rf "~/Library/Java"
```

**[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**

## Git

We're using latest stable. Install the version for your OS from:

**[https://git-scm.com/downloads](https://git-scm.com/downloads 'Download Git')**

### Git Credential Manager

You need the manager to log in to Microsoft from MacOS using Git.  
If you've updated Java, re-install GCM after.

```bash
	git-credential-manager install
```

## Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v8.9.4** (`node --version`)
- **npm 5.6.0** (`npm --version`)

**[Download Node with NPM](https://nodejs.org/download/release/v8.9.4/)**

## Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**

## Visual Studio Code

We use Visual Studio Code with relevant plugins.

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**

# Scripts

## yarn dev

**Always run after pull / clone!**

- Installs global tools (npm packages, CLI tools)
- Cleans code using `yarn lint`

## yarn read-sh

See [Can not run ShellScript](#can-not-run-shellscript)

## yarn install-globals

Install global CLI tools required by the project

## yarn lint

Executes `lint.sh` that runs **prettier** and **tslint** code formatting, fixing inconsistencies.

## yarn build

Start **TypeScript** compiler. Run at least once to generate **/lib** folder where JavaScript resides. You can also...

## yarn build-watch

Start **TypeScript** compiler and watch for changes.

## yarn start

Start the React-Native packager. You can also start it with options:

```bash
	npm start -- --reset-cache
	# or
	yarn start -- --reset-cache
```

## yarn test-watch

Run tests in watch mode, for development, updating snapshots as needed.

Runs the [jest](https://github.com/facebook/jest) test runner on your tests in watch mode with interactive console. Remember to run `u` option when prompted to update snapshots. This is alias to `npm run test`

## yarn test

Run tests as CI, not updating any snapshots. Run this before commit to ensure tests will work on build server.

You can run CI style tests in respective folder using

    yarn test

But in development you would want to test and **update Jest snapshots** (**`--u`**):

    yarn test-watch

## yarn docs

Generate documentation. [Read more](#publish-github-documentation)

## npm-version

Up the NPM package version before running `npm publish`. Automatically run as `prepublishOnly` command.

# Debugging

Use VS Code's debugging capabilities to maintain a effective development cycle.

**`Launch.json`** configuration is not checked in, but here is the debug `launch.json` for React-Native

```json
        {
            "name": "Attach to packager",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "attach",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug in Expo",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "exponent",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug Android",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "android",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug iOS",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "ios",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
```

And finally Jest Test debugging:

```json
    	{
            "type": "node",
            "request": "launch",
            "name": "Jest All",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest",
            "args": [
                "--runInBand"
            ],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Jest Current File",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest",
            "args": [
                "${file}"
            ],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
```

# Release

The project is released through NPM

[![npm](https://img.shields.io/npm/v/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components)

The source code is available on the **[Crossplatform GitHub](https://github.com/crossplatformsweden/react-native-components)**.

## Publish new version

1. Update the version. This will also run build and linting.

```bash
	yarn npm-version
```

2. Publish the new version on NPM (if not logged in run `npm adduser` first)

```bash
	npm publish --access public
```

### Publish GitHub documentation

Generate documentation using the `docs`command

```bash
	yarn docs
```

This will

1. Generate docs using the `typedoc` library (`yarn generate-docs`)
1. Publish to GitHub pages using the `gh-pages` library (`yarn gh-pages`)
