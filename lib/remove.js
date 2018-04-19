let {isObject, isArray, isPrimitiveType, isNegativeZero, isNanVal} = require('../utils')
let remove = function () {
  let [arr, arr2] = [this.arr, this.removeOpt.arr2]
  let [arrLen, arr2Len] = [arr.length, arr2.length]

  let judgeCore = (val, val2, flag = false) => {
    let removeHandle = (judgeModel) => {
      let judge = judgeModel(val, val2)
      ;(judge && flag) && arr.splice(arrLen, 1)
      return judge
    }

    if (isObject(val) && isObject(val2)) return removeHandle(judgeObject)
    if (isPrimitiveType(val) && isPrimitiveType(val2)) return removeHandle(judgePrimitiveType)
    if (isArray(val) && isArray(val2)) return removeHandle(judgeArray)

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

      judgeCore(val[key], val2[key]) && flagNum++
    }

    if (flagNum === keys.length) return true

    return false
  }

  let judgeArray = (val, val2) => {
    let valLen = val.length
    let flagNum = 0
    if (valLen !== val2.length) return false

    while (valLen--) {
      judgeCore(val[valLen], val2[valLen]) && flagNum++
    }

    if (flagNum === val.length) return true

    return false
  }

  let judgePrimitiveType = (val, val2) => {
    if (isNegativeZero(val) && isNegativeZero(val2)) return true
    if (isNegativeZero(val) || isNegativeZero(val2)) return false
    if (isNanVal(val) && isNanVal(val2)) return true
    if (val === val2) return true

    return false
  }

  while (arrLen--) {
    let arrVal = arr[arrLen]

    for (let i = 0; i < arr2Len; i++) {
      let arr2Val = arr2[i]
      judgeCore(arrVal, arr2Val, true)
    }
  }
}

module.exports =  remove
