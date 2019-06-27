# React Native Boilerplate

## Dependencies
* [React Native and its dependencies](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn (recommended)](https://yarnpkg.com)

## Setup
* `yarn` or `yarn install`
* Copy the file `android/local.properties.example` to `android/local.properties`
* Change `sdk.dir` in the file `local.properties` to your machines Android SDK location
* Change the `config.device` in `package.json` to the name of your installed device in AVD*

> \* You can use `emulator -list-avds` to see the names of your installed devices. If you have no devices installed you can follow [this guide](https://developer.android.com/studio/run/managing-avds).
