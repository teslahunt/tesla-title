'use strict'

const test = require('ava')

const title = require('..')

test('Model X 75D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX5', 'DV4W'] }), '75D')
  t.is(title({ optionCodes: ['MDLX', 'BTX7', 'DV4W'] }), '75D')
  t.is(title({ optionCodes: ['MDLX', 'BTX8', 'DV4W'] }), '75D')
})

test('Model X 90D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX4', 'DV4W'] }), '90D')
})

test('Model X P90D', t => {
  t.is(title({ optionCodes: ['MDLX', 'X024', 'BTX4', 'DV4W'] }), 'P90D')
  t.is(title({ optionCodes: ['MDLX', 'X024', 'PX4D', 'DV4W'] }), 'P90D')
})

test('Model X 100D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX6', 'DV4W'] }), '100D')
})

test('Model X P100D', t => {
  t.is(title({ optionCodes: ['MDLX', 'X024', 'BTX6', 'DV4W'] }), 'P100D')
})

test('Model X Standard Range', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX01'] }), 'Standard Range')
  t.is(title({ optionCodes: ['MDLX', 'MTX17'] }), 'Standard Range')
})

test('Model X Long Range', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX03'] }), 'Long Range')
  t.is(title({ optionCodes: ['MDLX', 'MTX10'] }), 'Long Range')
})

test('Model X Long Range Plus', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX05'] }), 'Long Range Plus')
  t.is(title({ optionCodes: ['MDLX', 'MTX07'] }), 'Long Range Plus')
})

test('Model X Performance', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX06'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLX', 'MTX04'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLX', 'MTX08'] }), 'Performance')
})

test('Model X', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX12'] }), '')
  t.is(title({ optionCodes: ['MDLX', 'MTX13'] }), '')
  t.is(title({ optionCodes: ['MDLX', 'MTX15'] }), '')
})

test('Model X Plaid', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX11'] }), 'Plaid')
  t.is(title({ optionCodes: ['MDLX', 'MTX14'] }), 'Plaid')
  t.is(title({ optionCodes: ['MDLX', 'MTX16'] }), 'Plaid')
})

test('Model X Plaid+', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX09'] }), 'Plaid+')
})
