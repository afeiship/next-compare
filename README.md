# next-compare
> Basic compare for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-compare
```

## usage
```js
import '@jswork/next-compare';

nx.compare(2, 1);   // 1
nx.compare(1, 1);   // 0
nx.compare(1, 2);   // -1
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-compare/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-compare
[version-url]: https://npmjs.org/package/@jswork/next-compare

[license-image]: https://img.shields.io/npm/l/@jswork/next-compare
[license-url]: https://github.com/afeiship/next-compare/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-compare
[size-url]: https://github.com/afeiship/next-compare/blob/master/dist/next-compare.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-compare
[download-url]: https://www.npmjs.com/package/@jswork/next-compare
