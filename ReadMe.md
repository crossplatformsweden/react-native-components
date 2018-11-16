[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native-Core

Beautiful React-Native components using [RN Paper by Callstack](https://github.com/callstack/react-native-paper).

These are some of the common use components [Crossplatform](https://www.crossplatform.se/) use in our projects.

---

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v2.18.2-blue.svg)](https://reactnavigation.org/)
![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-core.svg)

[![Build status](https://crossplatformsweden.visualstudio.com/ParkeraApp/_apis/build/status/GitHubInitBoilerplate-CI)](https://crossplatformsweden.visualstudio.com/ParkeraApp/_build/latest?definitionId=-1)
[![codecov](https://codecov.io/gh/crossplatformsweden/react-native-core/branch/master/graph/badge.svg)](https://codecov.io/gh/crossplatformsweden/react-native-core)
[![dependencies Status](https://img.shields.io/david/crossplatformsweden/react-native-init-core/status.svg)](https://david-dm.org/crossplatformsweden/react-native-core)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


[![GitHub issues](https://img.shields.io/github/issues/badges/shields.svg?style=social)](https://github.com/crossplatformsweden/react-native-core/issues)
[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-core.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-core)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-core.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-core)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-core.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-core)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse)

## Table of Contents

- [React-Native Init Boilerplate](#react-native-core)
  - [Table of Contents](#table-of-contents)
  - [Can not run ShellScript](#can-not-run-shellscript)
  - [GraphQL Apollo implementation](#graphql-apollo-implementation)
- [Configuration file `.env`](#configuration-file-env)
  - [Usage](#usage)
    - [Native projects](#native-projects)
    - [React-Native TypeScript](#react-native-typescript)
  - [Add key](#add-key)
    - [`.env`](#-env-)
    - [TypeScript interface `IEnv.ts`](#typescript-interface--ienvts-)
- [Project resources](#project-resources)
  - [Insights Sentry](#insights-sentry)
  - [Backlog & kanban](#backlog---kanban)
  - [Build server and deploy: VS App Center](#build-server-and-deploy--vs-app-center)
  - [Source Control: GitHub](#source-control--github)
- [Tools](#tools)
  - [Java](#java)
  - [Git](#git)
    - [Git Credential Manager](#git-credential-manager)
  - [Node](#node)
  - [Yarn](#yarn)
  - [Visual Studio Code](#visual-studio-code)
  - [Bash on Windows](#bash-on-windows)
- [Installation](#installation)
- [Scripts](#scripts)
  - [yarn dev](#yarn-dev)
  - [yarn lint](#yarn-lint)
  - [yarn build](#yarn-build)
  - [yarn build-watch](#yarn-build-watch)
  - [yarn start](#yarn-start)
  - [yarn test-watch](#yarn-test-watch)
  - [yarn test](#yarn-test)
  - [yarn ios](#yarn-ios)
  - [yarn android](#yarn-android)
- [Integrations](#integrations)
  - [AppCenter](#appcenter)
  - [Sentry](#sentry)
    - [Organization short name](#organization-short-name)
    - [Project short name](#project-short-name)
    - [Project ID](#project-id)
- [Delivery & Deployment](#delivery---deployment)
  - [URL Scheme](#url-scheme)
  - [Package name](#package-name)
  - [Android Release Build](#android-release-build)
    - [Gradle configuration used:](#gradle-configuration-used-)
    - [Scripts](#scripts-1)
- [Debugging](#debugging)
- [Release](#release)
- [Environment Variables](#environment-variables)
  - [Configuring Packager IP Address](#configuring-packager-ip-address)
- [Troubleshooting](#troubleshooting)
  - [Networking](#networking)
  - [iOS Simulator won't open](#ios-simulator-won-t-open)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Can not run ShellScript

Adjust the rights on SH-files for your user (in root). Remarks: we use **[bash terminal in VS Code](#bash-on-windows)**

    yarn read-sh

Or manually:

> sudo find . -name "\*.sh" | xargs chmod u+x

## GraphQL Apollo implementation

This project uses Apollo for state management as well as endpoint to the GraphQL backend.

Learn more about our implementation:

- **[Apollo implementation](Apollo.md)**

# Configuration file `.env`

The app uses **[`react-native-config`](https://github.com/luggit/react-native-config)** to store variables. Note that this isn't **[super safe](https://rammic.github.io/2015/07/28/hiding-secrets-in-android-apps/)**, so avoid putting sensitive information like keystore password there.

To run the app's features like `react-native-maps`, configure the variables in the root `.env` file:

    APP_NAME=RnEjectSanity
    API_URL=https://api.github.com/graphql
    APP_PREFIX=rninit://
    ANDROID_VERSION_NAME=0.0.1
    ANDROID_VERSION_CODE=1
    IOS_VERSION=0.0.1
    GOOGLE_MAPS_API_KEY=
    FACEBOOK_APP_ID=
    FACEBOOK_DISPLAY_NAME=ReactNativeInitBoilerplate
    SENTRY_URI=https://yourID.sentry.io/token

## Usage

### Native projects

See **[documentation](https://github.com/luggit/react-native-config)**. The above variables are used in native iOS and Android projects, like `APP_NAME`, in `AndroidManifest.xml` and `Info.plist` respectivly.

### React-Native TypeScript

The interface (below) and **`source//config/CrossConfigReader.ts`** allows you to use strictly typed configuration values in the RN project. For example `SentryUtility.ts`:

    import CrossConfigReader from '../config/CrossConfigReader';
    ...
    Sentry.config(
            CrossConfigReader.GetEnv().SENTRY_URI
          ).install();

## Add key

We love typed code. That's we use TypeScript. However, to achive this every new key needs to be added in two places:

### `.env`

Obviously, add your key value pair below the existing keys in the root `.env` file, e.g:

    MY_KEY=MyTokenOrSomething

### TypeScript interface `IEnv.ts`

The interface `./source/IEnv.ts` provides type mapping for your key. You can provide JS Doc comment too if you like.

    export interface IEnv {
    	...
       /**
       * Tells the user what year it is
       */
    	MY_KEY: string;
    }

# Project resources

## Insights Sentry

Application insights / bug reporting:

- **https://github.com/getsentry/react-native-sentry**

## Backlog & kanban

- **[GitHub Crossplatform](https://github.com/crossplatformsweden/react-native-core/projects)**

## Build server and deploy: VS App Center

- **TODO**

## Source Control: GitHub

- **[crossplatformsweden/react-native-core](https://github.com/crossplatformsweden/react-native-core.git)**

# Tools

## Java

We use **version 8** of the Java JDK. On OSX, remove any older versions according to this process

https://stackoverflow.com/questions/46770453/java-error-when-using-git-credential-manager-in-mac-on-osx

    brew cask remove java
    sudo rm -rf "/Library/Internet Plug-Ins/JavaAppletPlugin.plugin"
    sudo rm -rf "/Library/PreferencePanes/JavaControlPanel.prefPane"
    sudo rm -rf "~/Library/Application Support/Oracle"
    sudo rm -rf "~/Library/Java"

**[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**

## Git

We're using latest stable. Install the version for your OS from:

**[https://git-scm.com/downloads](https://git-scm.com/downloads 'Download Git')**

### Git Credential Manager

You need the manager to log in to Microsoft from MacOS using Git.  
If you've updated Java, re-install GCM after.

> git-credential-manager install

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

- **[GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)**
- **[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**

## Bash on Windows

To avoid having to run Windows specific scripts you can use Bash termial in VS Code, after having installed Git (above).

Ppen VS Code settings editor and add **"terminal.integrated.shell.windows"** to your settings.

On Windows 10, with Git installed (all options), the path to Bash should be:

> C:\\Program Files\\Git\\bin\\bash.exe

Now we have a new setting similar to:

    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",

New terminals in VS Code will use **Bash** instead of PowerShell and be able to execute all scripts without the **`-win`** parameter.

**Source**  
**[https://stackoverflow.com/a/42606838](https://stackoverflow.com/a/42606838)**

# Installation

Install using **`yarn`** or **`npm install`**. The **`postinstall`** scripts will add required global CLI:s to your computer.

**Warning!** Don't use **sudo** on MacOS unless absolutely unavoidable. You might end up having to reinstall all globals.

    yarn install

# Scripts

## yarn dev

**Always run after pull / clone!**

- Installs global tools (npm packages, CLI tools)
- Runs GraphQL generation
- Cleans code using `yarn lint`

## yarn lint

Executes `./lint.sh` from root that runs **prettier** and **tslint** code formatting, fixing inconsistencies.

## yarn build

Start **TypeScript** compiler. Run at least once to generate **/dist** folder where JavaScript resides. You can also...

## yarn build-watch

Start **TypeScript** compiler and watch for changes.

## yarn start

Start the React-Native packager. You can also start it with options:

```
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

## yarn ios

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

Runs the simulator named `iPhone 7` which we consider most stable.

There's a couple of scripts that runs a specific device:

- `ios-device` - runs default device which can be a physical one (see "Run on device" above)
- `yarn ios6` - runs the device named `iPhone 6`
- `yarn ios8` - runs the device named `iPhone 8`
- `yarn ios8plus` - runs the device named `iPhone 8 Plus`
- `yarn ipad` - runs the device named `iPad (5th generation)`

## yarn android

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

- **[Android Release Build](#android-release-build)**

# Integrations

## AppCenter

## Sentry

### Organization short name

> crossplatform-sweden-ab

### Project short name

> TODO

### Project ID

> TODO

# Delivery & Deployment

Don't put sensitive information here. Rather user something like

- **https://github.com/luggit/react-native-config**

## URL Scheme

> TODO

## Package name

> TODO

## Android Release Build

Assuming keystore is set up **[according to documentation](https://facebook.github.io/react-native/docs/signed-apk-android)** you can use the following commands.

### Gradle configuration used:

https://github.com/react-community/react-native-maps/issues/2188#issuecomment-418585832

### Scripts

> yarn android-build

If there are errors, try the full insights:

> yarn android-build-debug

# Debugging

Use VS Code's debugging capabilities to maintain a effective development cycle.

**`Launch.json`** configuration is not checked in, but here is the debug `launch.json` for generation:

        {
            "type": "node",
            "request": "launch",
            "name": "Generate Files",
            "program": "${workspaceRoot}/generation/lib/generateFiles.js"
        }

For **mobile** you can use tasks like these:

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

And finally Jest Test debugging:

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

# Release

The project is released through CD in VSTS. Update **release notes** if relevant:

- **[Mobile Project Release Notes](ReleaseNotes.md)**

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

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:

```
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
