# React Native Typescript template

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

# Setting up the development enviroment

For official documentation [Click here](https://reactnative.dev/docs/environment-setup#xcode)

## MacOS

At the beginning you need to install some basic packages

Recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

- `brew install node`
- `brew install watchman`
- `brew install yarn`

**If you'll get an error like Cannot find module 'npmlog', try installing npm directly:**

`curl -0 -L https://npmjs.org/install.sh | sudo sh.`

## iOS Development Environment Setup

**Install XCODE**

- The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.
- **`If you have already installed Xcode on your system, make sure it is version 10 or higher.`**
- After installing Xcode you need to accept `xcode developer agreement` in your console (bash or zsh)
  Next step is running one of the Xcode example projects to be sure that all missing dependencies are already installed.

## Android Development Environment Setup

- Follow the instruction from the official Facebook documentation - https://facebook.github.io/react-native/docs/getting-started.html (`Building Projects with Native Code -> macOS -> android`)
- You need to get through the `Java Development Kit` section and `Android development environment`

**_TIP: After installing all of the Android Studio packages and SDKs - create some TestProject and allow the IDE to check if all of the needed packages are installed - especially when you do not see the ANDROID menu item in the Android Studio “Tools”_**

## Local Development Installation

If you want to test the app on localhost, follow these instructions:

`yarn install`

`cd ios/` && `pod install`

\*\*You will need API keys

Rename `.env.example` to `.env` and update the keys.

\*\* IOS (Physical Device)

- Follow steps #1 and #2 in the [documentation for running a physical device](https://reactnative.dev/docs/running-on-device).
- Open `RNTS.xcworkspace` in xcode
- select the scheme you want to run
- build and run scheme

\*\* iOS (Simulator)

`yarn ios` to run app in development env

\*\* Android

Open the android studio and Run any android-tab emulator. If you haven't create any emulator yet you need to create one.

`yarn android` to run app in development env

> if dev server doesn't start automatically > Start dev server with `npx react-native start`:

## Development tools

- Use COMMAND + D to open iPhone simulator debugger menu
- Use COMMAND + M to open Android simulator debugger menu

### Debugger Menu Utilities

- `Debuge JS Remotelly` - simulator will automatically open web tab with devtools. I strongly recommend a substitution for that one: [React Native Debugger](https://github.com/jhen0409/react-native-debugger). Much easier, clearer tool and also can debug redux.

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic Button, Text) -`component` Each component should be stored inside its own folder, and inside it a file for its code and style. -`index.js` all the component should be export here.
  - `constants`: Folder to store any kind of constant that app have.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its own folder, and inside it a file for its code.
      - `index.js` -`container` component(can have logics) that are only relevatent to the screen
  - `selectors`: Folder to store your selectors for each reducer.
  - `store`: Folder to put all redux middlewares and the store.
    - `slice`: This folder should have its own redux-toolkit slice
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Android

## ios

## Styleguide

For coding styling we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).
