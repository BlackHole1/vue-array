let vueArray = require('../').$array
const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha

describe('Replace', () => {
  it('Replace Array', () => {
    let arr = [1, 2, 3, 4, 'a']
    vueArray(arr).replace(['a', 'b', 'c'])
    assert.equal(arr.length, 3)
  })
})