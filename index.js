let remove = require('./lib/remove')
let {isArray, isArrOrArg} = require('./utils')

const array = function (arr) {
  if (!isArray(arr)) {
    throw new Error(`The instance parameter must be an array`)
  }

  this.arr = arr
  this.arr2 = []
}

const methods = {
  remove
}

let keys = Object.keys(methods)
let i = keys.length
while (i--) {
  const key = keys[i]
  array.prototype[key] = function(...parameters) {
    this.arr2 = parameters[0]
    if (!isArrOrArg(this.arr2)) {
      throw new Error(`The method parameters must be Array or Arguments`)
    }

    methods[key].apply(this)
    return this
  }
}

module.exports = {
  install: function (vue) {
    vue.prototype.$array = arr => new array(arr)
  },
  injection: function (instance) {
    instance.prototype.$array = arr => new array(arr)
  },
  $array: arr => new array(arr)
}