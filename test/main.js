const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha

describe('module exports test', () => {
  it('injection test', () => {
    let arrInstance = Array
    require('../index').injection(arrInstance)
    assert.equal(({}).hasOwnProperty.call(arrInstance.prototype, '$array'), true)


    let arr = [1, 2, 3]
    assert.equal([].$array(arr).arr.length, 3)
  })

  it('exports test', () => {
    let vueArray = require('../').$array

    let arr = [1, 2, 3]
    assert.equal(vueArray(arr).arr.length, 3)
  })
})
