'use strict'

const test = require('ava')

const title = require('..')

test('Model Y Standard Range', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY01'] }), 'Model Y Standard Range')
})

test('Model Y Long Range RWD', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY02'] }), 'Model Y Long Range RWD')
})

test('Model Y Long Range AWD', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY03'] }), 'Model Y Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY07'] }), 'Model Y Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY09'] }), 'Model Y Long Range AWD')
  t.is(title({ optionCodes: ['MDLY', 'MTY11'] }), 'Model Y Long Range AWD')
})

test('Model Y Performance', t => {
  t.is(title({ optionCodes: ['MDLY', 'MTY04'] }), 'Model Y Performance')
  t.is(title({ optionCodes: ['MDLY', 'MTY05'] }), 'Model Y Performance')
})
