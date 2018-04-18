let vueArray = require('../').$array
const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha

describe('Remove', () => {
  it('Remove primitive type', () => {
    let arr = [1, 2, 3, 'abc', 'def', 'ghi', null, undefined, NaN, -0, 0, true, false]

    vueArray(arr).remove(2, 1, 'def').remove(['abc', null]).remove(NaN, -0)
    assert.equal(arr.length, 6)

    vueArray(arr).remove(false, undefined)
    assert.equal(arr.length, 4)
  })

  it('Remove Array and Object', () => {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      {a: 1},
      {b: 1},
      [{a: 2}],
      [{b: 2}],
      {a: [7,8, {b: 3}]}
    ]

    vueArray(arr).remove([[1, 2, 3], {a: 1}])
    assert.equal(arr.length, 5)

    vueArray(arr).remove({a: [7, 8, {b: 3}]})
    assert.equal(arr.length, 4)
  })
})