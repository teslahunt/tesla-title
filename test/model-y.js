'use strict'

const test = require('ava')

const title = require('..')

test('Model Y Standard Range', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY01'] }), 'Model Y Standard Range')
})

test('Model Y Long Range', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY03'] }), 'Model Y Long Range')
})

test('Model Y Performance', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY05'] }), 'Model Y Performance')
})
