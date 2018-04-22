# Vue-Array [![npm](https://img.shields.io/npm/dy/vue-array.svg)](https://www.npmjs.com/package/vue-array) [![npm](https://img.shields.io/github/issues/BlackHole1/vue-array.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/github/forks/BlackHole1/vue-array.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/github/stars/BlackHole1/vue-array.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/BlackHole1/all-equal)

[中文文档](https://github.com/BlackHole1/vue-array/blob/master/README-zh.md)

> Use this package to manipulate the array. Vue can monitor the changes in the array

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
let vueArray = require('../').$array

let arr = [1, 2, 3]
vueArray(arr).remove([2])
console.log(arr) // => [1, 3]

vueArray(arr).replace([4, 5, 6])
console.log(arr) // => [4, 5, 6]
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