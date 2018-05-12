let remove = require('./lib/remove')
let replace = require('./lib/replace')
let {isArray, isArrOrArg, isObject} = require('./utils')

const array = function (arr) {
  if (!isArray(arr)) {
    throw new Error('The instance parameter must be an array')
  }

  this.arr = arr

  this.removeOpt = {
    arr2: []
  }
  this.replaceOpt = {
    arr2: []
  }
}

const methods = {
  remove,
  replace
}

let keys = Object.keys(methods)
let i = keys.length
while (i--) {
  const key = keys[i]
  array.prototype[key] = function(...parameters) {
    if (key === 'remove') {
      // if parameter is Object, convert Array format
      this.removeOpt.arr2 = (parameters.length > 1)
      ? parameters
      : isObject(parameters[0]) ? [parameters[0]] : parameters[0]
    }

    if (key === 'replace') {
      if (!isArray(this.replaceOpt.arr2)) {
        throw Error('The replace parameter must be an array')
      }
      this.replaceOpt.arr2 = parameters[0]
    }

    methods[key].apply(this)

    // chained mode
    return this
  }
}

module.exports = {
  install: vue => {
    vue.prototype.$array = arr => new array(arr)
  },
  injection: instance => {
    instance.prototype.$array = arr => new array(arr)
  },
  $array: arr => new array(arr)
}