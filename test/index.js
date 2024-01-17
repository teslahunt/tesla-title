'use strict'

const test = require('ava')

const { MODEL_S, MODEL_X, MODEL_3, MODEL_Y } = require('..')

const testData = (collection, t) => {
  t.true(Array.isArray(collection))
  t.true(collection.every(elem => Array.isArray(elem)))

  collection.forEach(([title, optionCodes]) => {
    t.true(typeof title === 'string')
    t.true(Array.isArray(optionCodes))
    t.true(optionCodes.every(optionCode => Array.isArray(optionCode)))
    optionCodes.forEach(optionCode => {
      t.true(
        optionCode.every(code => {
          return typeof code === 'string' && !code.includes(',')
        })
      )
    })
  })
}

test('data structure is well defined', t => {
  testData(MODEL_S, t)
  testData(MODEL_X, t)
  testData(MODEL_3, t)
  testData(MODEL_Y, t)
})
