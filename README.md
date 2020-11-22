# CORDOVA+RIOT template

## Installation
Clone the repository:
```sh
git clone https://github.com/EliteXXL/cordova-riot-template
```
or simply download it zipped and unzip it wherever you want
### Usage
- Enter the newly created folder
- Add whatever platforms you like to cordova
```sh
cordova platform add <platform>
```
- Code in folder `src` (the default entry point is `src/index.ts`)
- Whenever you're ready run rollup
```sh
npx rollup -c
```
If you want to auto-run rollup during development run it in watch mode
```sh
npx rollup -c --watch
```
It will build cordova platforms every written bundle
- Enjoy ☻