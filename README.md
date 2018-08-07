# Multi Platform Bpl Lite Wallet

[![Github Latest Release](https://img.shields.io/github/release/blockpool-io/bpl-desktop.svg)](https://github.com/blockpool-io/bpl-desktop/releases/latest)
[![Github Downloads](https://img.shields.io/github/downloads/blockpool-io/bpl-desktop/latest/total.svg?logo=github)](https://github.com/blockpool-io/bpl-desktop/releases/latest)

## Download Windows 10 64 bit
[Latest Release](https://blockpool.io/BPL_Wallet.html)

## Features
* Available on ***Windows***, ***Linux*** (ubuntu/debian) and ***Macosx*** (signed)
* No wait to sync to the network: launch and use.
* view any account from its address (transactions, delegate status and votes)
* (soon) deposit BPL using altcoins or USD (via changer.com) - no registration needed
* label any account
* realtime currency value (updated every 5 min) in UsD, Euro, BTC, HKD, JPY, CNY, AuD, CanD, Pound and Rubble
* autoconnecting to a healthy bpl network peer. If the peer is not good any more, automatically find a new one.
* send bpl from/to any account.
* easily switch to different network, or private chains
* customize background
* isolated processes on Windows and Macosx to prevent from data sniffing or injection.
* Translations (thanks to the Bpl community). Please help contributing

If you login to your account (with your passphrase)
* (soon) Withdraw to altcoins or USD (via changer.com) - no registration needed
* Organise your accounts with virtual folders (for instance savings, personnal etc...) so you don't pay any transfer fee
* Update your votes.
* Save your passphrases (unsecured so far, secured vault in the near future)

Second signature supported. Multisignature accounts not yet supported.

## Screenshots
![alt text](https://s21.postimg.org/oepmffjqf/BPL-_Desktop.png)

## From code

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Optionally switch to node 6.9.2, because this is currently developped with this version:
```
sudo npm install -g n
sudo n 6.9.2
```

Install from source:
```bash
# Clone this repository
git clone https://github.com/blockpool-io/BPL-desktop
# Go into the repository
cd BPL-desktop
# Install dependencies 
npm install
```

## Electron

### Start

Start the Electron client.

```
npm run start
```

### Windows

Build package for Windows.

```
npm run dist:win
```

Build package for Windows ia32.

```
npm run dist:win32
```

### Mac OS X

Build package for Mac OS X.

```
npm run dist:macos
```

### Linux

Install Dependencies.

```
apt-get install icnsutils graphicsmagick
```

Build package for Linux.

```
npm run dist:linux
```

## Necessary to package from Mac OS X

```
brew tap Homebrew/bundle
brew bundle
```

## Authors
- Raj Singh <rsingh@blockpool.io>
- Brandon Cook <bcook@blockpool.io>
- FX Thoorens <fx@ark.io>
- Guillaume Verbal <doweig@ark.io>

### License 
The MIT License (MIT)

Copyright © 2017 BlockPool Copyright © 2017 Ark Copyright © 2016-2017 Lisk Foundation Copyright © 2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
