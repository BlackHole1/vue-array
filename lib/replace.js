let replace = function () {
  let [arr, arr2] = [this.arr, this.replaceOpt.arr2]

  arr.splice(0, arr.length)
  arr.push.apply(arr, arr2)
}

module.exports =  replace
