# assert-pkgs-private
Assert that all packages have `{"private": true}` so you can't accidentally publish private code.

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/assert-pkgs-private.png?style=shield)][circleci]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/assert-pkgs-private

It'll find all `package.json` files in a directory that are **not** a subdirectory of `node_modules` and assert that they contain `{"private": true}`.

This is mostly useful for monorepos.


## Install
To install

```
npm install orangemug/assert-pkgs-private
```


## Usage
Via code

```
const assertPkgsPrivate = require('assert-pkgs-private');
assertPkgsPrivate(__dirname+"/path/to/test-dir");
```


## License
MIT

