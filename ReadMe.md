[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native-Core

Beautiful React-Native components using [RN Paper by Callstack](https://github.com/callstack/react-native-paper).
These are some of the common use components [Crossplatform](https://www.crossplatform.se/) use in our projects.

---

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/) [![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v2.18.2-blue.svg)](https://reactnavigation.org/) ![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-core.svg)

## Table of Contents

- [Crossplatform React-Native-Core](#crossplatform-react-native-core)

  - [Table of Contents](#table-of-contents)
  - [Can not run ShellScript](#can-not-run-shellscript)

    [Insights Sentry](#insights-sentry)

  - [Backlog & kanban](#backlog---kanban)
  - ools](#tools)
  - [Git] #git)
    - [Git Creden

- - [Git] #git)

  - [ [G] #git)
    - ode](#node)
  - [Yarn](#yarn)
  - [Visual Studi
  - [Node](#node)
  - [Yarn](#yarn)
  - [Visual Studio Code](#visual-studio-code)
  - nstallation](#installation)

- [Scr
- [Installation](#installation)
- - [yarn dev](#yarn-
  - [yarn dev](#yarn-de)
  - [yarn lint](#yarn-lint)
  - [yarn build](#yarn-build)
  - [yarn build-watch](#yarn-build-watch)
  - [yarn test-watch](#yarn-test-watch)
  - bugging](#debugging)
-
- Debugging](#debugging)
- [Release](#release)
- - [Configuring Packager IP Address](#configurin
  - rou leshooting](#troubleshooting)
  - [Networking](#networking)

- - [Networking](#networking)
  - [i
  - [Networking](#networking)
  - mall><i><a href='http://ecotrust-canada.github.io/mar

<small><i><a href='http://ecotrust-canada.github.io/markdown-t c/'>Table of contents generated with markdown-toc</a></i></small>

## Can not run ShellScript

Adjust the rights on SH-files

## Table of Contents

- - [Table of Contents](#table-of-contents)
  - [Can not run ShellSc
  - [Table of Contents](#table-of-contents)
  - [Can not run ShellScript](#can-not-run-shellscript)
  - [Insights Sentry](#insights-sentry)
  - ools](#tools)
  - ## [Git](#git)
  - ools](#tools)
  - - [Git Cred
    - [Git Creden
- - - - [Git Cr

  - - [Git Cred
    - ode](#node)
  - [Yarn](#yarn)
  - [Visual Studi
  - [Node](#node)
  - [Yarn](#yarn)
  - nstallation](#installation)

- [Scr
- - nstallation](#installation)

- [Scr
- - [yarn dev](#yarn-
  - [yar
- - [yarn dev](#yarn-
  - [yarn dev](#yarn-dev)
  - [yarn lint](#yarn-lint)
  - [yarn build](#yarn-build)
  - [yarn build-watch](#yarn-build-watch)
  - ebugging](#debugging)

- [Debuggi

  - ebugging](#debugging)

- [Debugging](#debugging)
- - [Configuring Pack
- - [oubleshooting](#troubleshooting](#configurin
  - roubleshooting](#troubleshooting)
  - - [Networking](#networkin

- - [Networking](#networking)
  - [i
  - mall><i><a href='http://e
  - mall><i><a href='http://ecotrust-canada.github.io/mar

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Can not run ShellScript

Adjust the rights on SH-files for your user (in root). Remarks: we use \*\* chmod u+x# Project resources

## Insights\*\*

```

```

```

Or manually:

> sudo find . -name "\*.sh" | xargs chmod u+x# Project resources

## Insights Sentry

Application insights / bug reporting:

- \*\* Backlog & kanban

- **[Backlog & kanban



  ](**

## Backlog & kanban

- \*\* Source Control: GitHub

- **[Source Control: GitHub



  - \*\*Tools](
## Git

We'r**

## Source Control: GitHub

- \*\*Tools

## Git

We're using latest stable. Install the version for your OS from:

**[ Tools

#**

# Tools

## Git

We're using latest stable. Install the version for your OS from:

\*\*### Git Credential Manager

You need the manager to log in to Microsoft fro\*\*

### Git Credential Manager

You need the manager to log in to Microsoft from MacOS using Git.\
If you've updated Java, re-install GCM after.

> git-credential-manager install

## Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v8.10.0** (`node --version`)
- **npm 5.6.0** (`npm --version`)

\*\*## Yarn

We install and run our scripts with yarn, as an alternative\*\*

## Yarn

We install and run our scripts with yarn, as an alternative to npm:

\*\*## Visual Studio Code

We use Visual Studio Code with re\*\*

## Visual Studio Code

We use Visual Studio Code with relevant plugins.

- **[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **\* Bash on Windows

To avoid having to run Windows specific scripts you can use Bash termial in V\*\*

## **
- \*\* Bash on Windows

To avoid having to run Windows specific scripts you can use Bash termial in V\*\*

## Bash on Windows

To avoid having to run Windows specific scripts you can use Bash termial in VS Code, after having installed Git (above).

Ppen VS Code settings editor and add **"terminal.integrated.shell.windows"** to your settings.

On Windows 10, with Git installed (all options), the path to Bash should be:

> C:w Program Files sGitinbinimbash.exe

Now we have a new setting similar to:

```

```

N
```

New terminals in VS Code will use **Bash** instead of PowerShell and be able to execute all scripts without the **`-win`** parameter.

**Source**\
\*\*# Installation

Install using **`yarn`** or **`npm install`**. The **`post**

# Installation

Install using **`yarn`** or **`npm install`**. The **`postinstall`** scripts will add required global CLI:s to your computer.

**Warning!** Don't use **sudo** on MacOS unless absolutely unavoidable. You might end up having to reinstall all globals.

```

```

```

# Scripts

## yarn dev

**Always run after pull / clone!**

- Installs global tools (npm packages, CLI tools)
- Cleans code using `yarn lint`

## yarn lint

Executes `./lint.sh` from root that runs **prettier** and **tslint** code formatting, fixing inconsistencies.

## yarn build

Start **TypeScript** compiler. Run at least once to generate **/dist** folder where JavaScript resides. You can also...

## yarn build-watch

Start **TypeScript** compiler and watch for changes.

## yarn test-watch

Run tests in watch mode, for development, updating snapshots as needed.

Runs the test

Run tests as CI, not updating a test runner on your tests in watch mode with interactive console. Remember to run `u` option when prompted to update snapshots. This is alias to `npm run test`

## yarn test

Run tests as CI, not updating any snapshots. Run this before commit to ensure tests will work on build server.

You can run CI style tests in respective folder using

```

```

B
```

But in development you would want to test and **update Jest snapshots** (**`--u`**):

```

Us
```

```

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

- \*\*Environment Variables

You can configure some\*\*

# Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

## Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```

```

T
```

T

```
The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```

`

```

```

W

```

```

Windows:

```

```

T

```

T

```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

# Troubleshooting

## Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```

`
```

```
T
```

```

Try opening Safari or Chrome on your phone and loading

```

```

a
```

a

```
and

```

`

```

```

I

```

```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the ot feature on your phone (beware of data usage, though), connecting your computer to that WiFi n with details about these steps and any other error messages you may have received.

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
