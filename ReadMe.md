[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native-Core

Beautiful React-Native components using [RN Paper by Callstack](https://github.com/callstack/react-native-paper). If using a paper provider your theme should be applied to all the components.

These are some of the common use components [Crossplatform](https://www.crossplatform.se/) use in our projects.

The components currently use **[FontAwesome v4 icons](https://fontawesome.com/v4.7.0/icons/)**. Ability to customize this might be added.

---

[![npm](https://img.shields.io/npm/v/@crossplatform/react-native-core.svg)](https://www.npmjs.com/package/@crossplatform/react-native-core) 
[![npm](https://img.shields.io/npm/dt/@crossplatform/react-native-core.svg)](https://www.npmjs.com/package/@crossplatform/react-native-core) 

[![Build status](https://img.shields.io/azure-devops/build/crossplatformsweden/parkeraapp/15.svg)](https://crossplatformsweden.visualstudio.com/ParkeraApp/_build/latest?definitionId=15) 
[![codecov](https://codecov.io/gh/crossplatformsweden/react-native-core/branch/master/graph/badge.svg)](https://codecov.io/gh/crossplatformsweden/react-native-core) 
[![dependencies](https://david-dm.org/crossplatformsweden/react-native-core/status.svg)](https://david-dm.org/crossplatformsweden/react-native-core) 
[![peer dependencies](https://img.shields.io/david/peer/crossplatformsweden/react-native-core.svg)](https://github.com/crossplatformsweden/react-native-core)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-core.svg) 

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/) 
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v2.18.2-blue.svg)](https://reactnavigation.org/) 

[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-core.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-core)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-core.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-core)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-core.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-core)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse)

## Table of Contents

- [Crossplatform React-Native-Core](#crossplatform-react-native-core)
  * [Table of Contents](#table-of-contents)
  * [Install](#install)
    + [Important Icons!](#important-icons-)
  * [Documentation](#documentation)
  * [Components](#components)
    + [CrossButton](#crossbutton)
    + [CrossBusyIndicator](#crossbusyindicator)
    + [CrossSpinner](#crossspinner)
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
- [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
- [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-won-t-open)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Install
Install with [react-native-paper](https://github.com/callstack/react-native-paper) if you don't already have it.

```bash
	npm i react-native-paper 
	npm i @crossplatform/react-native-core
```

Or if you're hanging with the cool kids

```bash
	yarn add react-native-paper 
	yarn add @crossplatform/react-native-core
```

### Important Icons!

[**React-Native-Vector-Icons**](https://github.com/oblador/react-native-vector-icons) is required if you're not using **[Expo](https://www.expo.io/)**.

```bash
	npm i react-native-vector-icons 
```
```bash
	yarn add react-native-vector-icons
```

## Documentation
See our GitHub Pages generated from code comments. This documentation is also available as intellisense / auto complete.

* **[API Documnentation](https://crossplatformsweden.github.io/react-native-core/)**

## Components
### CrossButton
![](https://media.giphy.com/media/MohS56wPG7AgPGteu1/giphy.gif)

Renders an [FontAwesome Button](https://github.com/oblador/react-native-vector-icons#iconbutton-component) if only `iconName` is supplied, else an [Paper Button](https://callstack.github.io/react-native-paper/button.html).

For properties and documentation, see **[API reference - Class CrossButton](https://crossplatformsweden.github.io/react-native-core/classes/_components_buttons_crossbutton_.crossbutton.html)**. 

Button with **title**, but no icon and mode `contained` (background color):

```typescript
	import { CrossButton } from '@crossplatform/react-native-core';
	
	export const ButtonComp => () => (
 		<CrossButton
            title="Click me"
            mode="contained"
            onPress={() => OnButtonPress('Pressed button with no icon')}
          />
	);
```

Button with **title** and **icon**, default `text` mode (no background):

```typescript
	import { CrossButton } from '@crossplatform/react-native-core';
	
	export const ButtonComp => () => (
          <CrossButton
            title="Click me"
            iconName="home"
            onPress={() => OnButtonPress('Pressed button with icon')}
          />
	);
```
	
Clickable icon:

```typescript
	import { CrossButton } from '@crossplatform/react-native-core';
	
	export const ButtonComp => () => (
          <CrossButton
            iconName="map"
            onPress={() => OnButtonPress('Pressed icon with no title')}
            backgroundColor="transparent"
          />
	);
```

### CrossBusyIndicator
![](https://media.giphy.com/media/1jYwyqHG3zWRcKucSg/giphy.gif)

Renders a [react-native-modal](https://github.com/react-native-community/react-native-modal) containing cool animations from [react-native-indicators](https://github.com/n4kz/react-native-indicators).

For properties and documentation, see **[API reference - Class CrossBusyIndicator](https://crossplatformsweden.github.io/react-native-core/classes/_components_modals_crossbusyindicator_.crossbusyindicator.html)**. 

Feedback `message` and *PacmanIndicator* `type` (because, why not).

```typescript
	<CrossBusyIndicator
		  isBusy={this.state.isBusy}
		  type={CrossSpinnerType.PacmanIndicator}
		  isCancelButtonVisible={true}
		  message="Loading.."
		  onCancel={() => this.setState({ isBusy: false })}
	/>
```

Non-cancellable and custom styles for `spinnerProps` and `messageStyle`:

```typescript
	<CrossBusyIndicator
		  key="busy2"
		  testID="busy2"
		  spinnerProps={{ color: 'red', type: CrossSpinnerType.WaveIndicator }}
		  messageStyle={{ color: 'red' }}
		  isBusy={this.state.isBusy2}
		  isCancelButtonVisible={false}
		  message="Resistance is futile"
	/>
```

### CrossSpinner
Basically just wraps [react-native-indicators](https://github.com/n4kz/react-native-indicators) so you can provide the type you want via property.

See it in use above. 

The **[styles](https://crossplatformsweden.github.io/react-native-core/modules/_styles_.html)** used are exported for your convenience.

For properties and documentation, see **[API reference - Class CrossSpinner](https://crossplatformsweden.github.io/react-native-core/modules/_components_animations_crossspinner_.html)**. 


```typescript
    <CrossSpinner
        type={CrossSpinnerType.MaterialIndicator}
        style={styles.spinner}
      />
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

- **[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)**
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

[![npm](https://img.shields.io/npm/v/@crossplatform/react-native-core.svg)](https://www.npmjs.com/package/@crossplatform/react-native-core) 

The source code is available on the **[Crossplatform GitHub](https://github.com/crossplatformsweden/react-native-core)**.

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

A) Generate docs using the `typedoc` library (`yarn generate-docs`)
B) Publish to GitHub pages using the `gh-pages` library (`yarn gh-pages`)

# Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

## Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```bash
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:

```bash
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

# Troubleshooting

## Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

## iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

- "non-zero exit code: 107"
- "You may need to install Xcode" but it is already installed
- and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.