let {isObject, isArray, isPrimitiveType, isNegativeZero, isNanVal} = require('../utils')
let remove = function () {
  let {arr, arr2} = this
  let arrLen = arr.length
  let arr2Len = arr2.length

  let delVal = (flag, judge) => (flag && judge) && arr.splice(arrLen, 1) 

  let judgeCore = (val, val2, flag = false) => {
    if (isObject(val) && isObject(val2)) {
      let judge = judgeObject(val, val2)
      delVal(flag, judge)
      return judge
    }

    if (isPrimitiveType(val) && isPrimitiveType(val2)) {
      let judge = judgePrimitiveType(val, val2)
      delVal(flag, judge)
      return judge
    }

    if (isArray(val) && isArray(val2)) {
      let judge = judgeArray(val, val2)
      delVal(flag, judge)
      return judge
    }
    return false
  }

  let judgeObject = (val, val2) => {
    let keys = Object.keys(val)
    let i = keys.length
    let flagNum = 0

    if (i !== Object.keys(val2).length) return false

    while (i--) {
      let key = keys[i]
      if (!({}).hasOwnProperty.call(val2, key)) return false

      let judge = (val[key], val2[key])
      judge && flagNum++
    }
    if (flagNum === keys.length) return true
    return false
  }

  let judgeArray = (val, val2) => {
    let valLen = val.length
    let flagNum = 0
    if (valLen !== val2.length) return false

    while (valLen--) {
      let judge = judgeCore(val[valLen], val2[valLen])
      judge && flagNum++
    }
    if (flagNum === val.length) return true
    return false
  }

  let judgePrimitiveType = (val, val2) => {
    if (isNegativeZero(val) && isNegativeZero(val2)) {
      return true
    } else if (isNanVal(val) && isNanVal(val2)) {
      return true
    }
    else if (val === val2) {
      return true
    }
    return false
  }

  while (arrLen--) {
    let arrVal = arr[arrLen]

    for (let i = 0; i < arr2Len; i++) {
      let arr2Val = arr2[i]
      judgeCore(arrVal,arr2Val, true)
    }
  }
}

module.exports =  remove
module.exports.default = remove
