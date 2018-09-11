# Vue-Array 
[![Node Version](https://img.shields.io/badge/node.js-%3E=_6-green.svg)](https://travis-ci.org/BlackHole1/vue-array)
[![Build Status](https://travis-ci.org/BlackHole1/vue-array.svg?branch=master)](https://travis-ci.org/BlackHole1/vue-array)
[![Coverage Status](https://coveralls.io/repos/github/BlackHole1/vue-array/badge.svg?branch=master)](https://coveralls.io/github/BlackHole1/vue-array?branch=master)
[![Npm Downlaod](https://img.shields.io/npm/dy/vue-array.svg)](https://www.npmjs.com/package/vue-array)

[![NPM](https://nodei.co/npm/vue-array.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-array/)

[中文文档](https://github.com/BlackHole1/vue-array/blob/master/README-zh.md)

Use this package to manipulate the array. Vue can monitor the changes in the array

> If you can, you can use the `Vue.set` method.

## install

```bash
# Install with npm
$ npm install vue-array --save

# Install with yarn
$ yarn add vue-array
```

## Usage

### Vue Plug-in

demo: [https://codesandbox.io/s/jppo9w6yyw](https://codesandbox.io/s/jppo9w6yyw)

### Ordinary

```javascript
let vueArray = require('vue-array').$array

let arr = [1, 2, 3, -0 , 0]
vueArray(arr).remove([2, 1]).remove(0)
console.log(arr) // => [3, -0]

vueArray(arr).replace([4, 5, 6]).replace(['a', 'b', 'c'])
console.log(arr) // => ['a', 'b', 'c']
```

### Instance

```javascript
let arrInstance = Array
require('vue-array').injection(arrInstance)

let arr = [1, 2, 3]
[].$array(arr).remove([3,1])
console.log(arr) // => [2]

[].$array(arr).replace([4, 5, 6])
console.log(arr) // => [4, 5, 6]
```

## API

### remove

> Support numbers, strings, Boolean, Null Undefined NaN, Object, Array, ±0

> If it is an object, an array, support recursive judgment

```javascript
let arr = [
  "abc", 123, -0, 0, false, true, null, undefined, NaN,
  [1, 2, 3],
  [4, 5, 6],
  {a: 1},
  {b: 1},
  [{a: 2}],
  [{b: 2}],
  {a: [7,8, {b: 3}]}
]

vueArray(arr).remove([
  null, true, 0, "abc", NaN,
  [1, 2, 3],
  [{b: 2}],
  {a: 1},
  {a: [7,8, {b: 3}]}
])

console.log(arr)
/**
[
  123, -0, fasle, undefined,
  [4, 5, 6],
  {b: 1},
  [{a: 2}],
]
**/
```

### replace

```javascript
let arr = [1, 2, 3, 4, 'a', NaN, {a: 1}, [2,1]]
vueArray(arr).replace(['a', 'b', 'c'])

console.log(arr) // => ['a', 'b', 'c']
```

## Running tests

Install dev dependencies:

``` bash
$ npm test
```

## Contributing


| **Commits** | **Contributor** | 
| --- | --- |
| 7 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)
