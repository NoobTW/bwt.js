# BWT.js

[![LICENSE](https://img.shields.io/npm/l/bwt.js.svg?style=flat)](https://npmjs.com/package/bwt.js)
[![Travis Build](https://travis-ci.org/NoobTW/bwt.js.svg?branch=master)](https://travis-ci.org/NoobTW/bwt.js/builds/495058415#)

A Burrows–Wheeler Transform library in JavaScript.

## Install

### npm

```bash
npm install --save bwt.js
```

### cdn

```html
<script src="https://unpkg.com/bwt.js/dist/bwt.iife.js"></script>
```

## Usage

### Node

```javascript
const { bwt, iBwt } = require('bwt.js');

console.log(bwt('banana'));
console.log(iBwt('annb$aa'));
```

### Browser

```javascript
console.log(bwt('banana'));
console.log(iBwt('annb$aa'));
```

## License

MIT