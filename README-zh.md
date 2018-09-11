# Vue-Array 
[![Node Version](https://img.shields.io/badge/node.js-%3E=_6-green.svg)](https://travis-ci.org/BlackHole1/vue-array)
[![Build Status](https://travis-ci.org/BlackHole1/vue-array.svg?branch=master)](https://travis-ci.org/BlackHole1/vue-array)
[![Coverage Status](https://coveralls.io/repos/github/BlackHole1/vue-array/badge.svg?branch=master)](https://coveralls.io/github/BlackHole1/vue-array?branch=master)
[![Npm Downlaod](https://img.shields.io/npm/dy/vue-array.svg)](https://www.npmjs.com/package/vue-array)

[![NPM](https://nodei.co/npm/vue-array.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-array/)

[English documents](https://github.com/BlackHole1/vue-array/blob/master/README.md)

使用此package来操作数组。vue是可以监听到数组中的更改的

> 如果可以，可以使用`Vue.set`方法

## 安装

```bash
# npm安装
$ npm install vue-array --save

# yarn安装
$ yarn add vue-array
```

## 使用

### vue插件

demo: [https://codesandbox.io/s/jppo9w6yyw](https://codesandbox.io/s/jppo9w6yyw)

### 普通方法

```javascript
let vueArray = require('vue-array').$array

let arr = [1, 2, 3, -0 , 0]
vueArray(arr).remove([2, 1]).remove(0)
console.log(arr) // => [3, -0]

vueArray(arr).replace([4, 5, 6]).replace(['a', 'b', 'c'])
console.log(arr) // => ['a', 'b', 'c']
```

### 注入方法

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

> 支持 numbers, strings, Boolean, Null Undefined NaN, Object, Array, ±0

> 如果是对象、数组，会进行递归操作

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

## 运行测试

安装dev依赖关系:

``` bash
$ npm i -D && npm test
```

## 贡献


| **次数** | **贡献者** | 
| --- | --- |
| 7 | [Black-Hole](https://github.com/BlackHole1) |

## 作者

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)
