# BPL Desktop Wallet

![BPL Desktop Wallet](./banner.png)

[![Build Status](https://badgen.now.sh/circleci/github/blockpool-io/desktop-wallet)](https://circleci.com/gh/ArkEcosystem/desktop-wallet)
[![Latest Version](https://badgen.now.sh/github/release/blockpool-io/desktop-wallet)](https://github.com/ArkEcosystem/desktop-wallet/releases)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

## Download
[Latest Release](https://github.com/blockpool-io/bpl-desktop/releases)

## Development

### Requirements

#### Ubuntu
In Ubuntu the development files of `libudev` are necessary:
```
sudo apt-get install libudev-dev libusb-1.0-0-dev
```

#### Windows
- Python 2.7
- Visual Studio 2017

#### Node 11
To download, head over to [here](https://nodejs.org/en/) and download Node 11.

If you already have npm installed, you can run
```
npm install -g n
sudo n 11
```

#### Yarn
Install the Yarn dependency manager
```
npm install -g yarn
```

### Commands

<details><summary>List of commands</summary>

``` bash
# Install dependencies
yarn install

# Execute the application. Making changes in the code, updates the application (hot reloading).
yarn dev

# Lint all JS/Vue files in the `src` and `__tests__`
yarn lint

# Lint, and fix, all JS/Vue files in `src` and `__tests__`
yarn lint:fix

# Check that all dependencies are used
yarn depcheck

# Collect the code and produce a compressed file
yarn pack

# Build electron application for production (Current OS)
yarn build

# Build electron application for production (Windows)
yarn build:win

# Build electron application for production (Mac)
yarn build:mac

# Build electron application for production (Linux)
yarn build:linux

# Run unit and end-to-end tests
yarn test

# Run unit tests
yarn test:unit

# Run unit tests and generate and display the coverage report
yarn test:unit:coverage

# Run unit tests and watch for changes to re-run the tests
yarn test:unit:watch

# Run end-to-end tests, without building the application
yarn test:e2e

# Build the application and run end-to-end tests
yarn test:e2e:full

# List what translations are missing or unused on a specific language. It could capture suggestions that are not accurate
yarn i18n 'src/renderer/i18n/locales/LANGUAGE.js'

# List what English messages are missing or unused (English is the default language)
yarn i18n:en-US

# List what translations are missing or unused on every language
yarn i18n:all
```

</details>

## Security

If you discover a security vulnerability within this project, please send an e-mail to support@blockpool.io. All security vulnerabilities will be promptly addressed.

## Credits

 - [Alex Barnsley](https://github.com/alexbarnsley)
 - [ItsANameToo](https://github.com/ItsANameToo)
 - [Juan A. Martín](https://github.com/j-a-m-l)
 - [Lúcio Rubens](https://github.com/luciorubeens)
 - [All Contributors](../../contributors)

## License

[MIT](LICENSE) © [Blockpool](https://blockpool.io)
[MIT](LICENSE) © [ArkEcosystem](https://ark.io)
