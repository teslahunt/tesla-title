'use strict'

const test = require('ava')

const title = require('..')

test('Model Y', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY18'] }), '')
  t.is(title({ optionCodes: ['MDLY', 'MTY19'] }), '')
  t.is(title({ optionCodes: ['MDLY', 'MTY23'] }), '')
})

test('Model Y Standard Range', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY01'] }), 'Standard Range')
  t.is(title({ optionCodes: ['MDLY', 'MTY08'] }), 'Standard Range')
  t.is(title({ optionCodes: ['MDLY', 'MTY13'] }), 'Standard Range')
})

test('Model Y Long Range RWD', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY02'] }), 'Long Range RWD')
})

test('Model Y Long Range AWD', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY03'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY06'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY07'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY09'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY11'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY14'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY20'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY24'] }), 'Long Range AWD')
})

test('Model Y Performance', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY04'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLY', 'MTY05'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLY', 'MTY10'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLY', 'MTY12'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLY', 'MTY21'] }), 'Performance')
})
