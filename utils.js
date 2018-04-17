let ToString = arr => ({}).toString.call(arr)

let isObject = obj => obj != null && typeof obj === 'object' && !isArray (obj) && ToString(obj) === '[object Object]'

let isNumber = num => typeof num === 'number'

let isNegativeZero = num => num === 0 && (1 / num < 0)

let isString = str => typeof str === 'string'

let isBoolean = bool => typeof bool === 'boolean'

let isNoop = noop => noop === null || noop === undefined

let isNanVal = val => val !== val && isNaN(val)

let isArray = arr => ToString(arr) === '[object Array]'

let isArguments = arr => ToString(arr) === '[object Arguments]'

let isArrOrArg = arr => isArray(arr) || isArguments(arr)

let isPrimitiveType = val => isNumber(val) || isString(val) || isBoolean(val) || isNoop(val)

module.exports = {
  isObject,
  isNumber,
  isNegativeZero,
  isString,
  isBoolean,
  isNoop,
  isNanVal,
  isArray,
  isArguments,
  isArrOrArg,
  isPrimitiveType
}