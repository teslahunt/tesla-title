'use strict'

const test = require('ava')

const title = require('..')

test('Model X 75D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX5', 'DV4W'] }), 'Model X 75D')
  t.is(title({ optionCodes: ['MDLX', 'BTX7', 'DV4W'] }), 'Model X 75D')
  t.is(title({ optionCodes: ['MDLX', 'BTX8', 'DV4W'] }), 'Model X 75D')
})

test('Model X 90D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX4', 'DV4W'] }), 'Model X 90D')
})

test('Model X P90D', t => {
  t.is(title({ optionCodes: ['MDLX', 'X024', 'BTX4', 'DV4W'] }), 'Model X P90D')
  t.is(title({ optionCodes: ['MDLX', 'X024', 'PX4D', 'DV4W'] }), 'Model X P90D')
})

test('Model X 100D', t => {
  t.is(title({ optionCodes: ['MDLX', 'BTX6', 'DV4W'] }), 'Model X 100D')
})

test('Model X P100D', t => {
  t.is(
    title({ optionCodes: ['MDLX', 'X024', 'BTX6', 'DV4W'] }),
    'Model X P100D'
  )
})

test('Model X Standard Range', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX01'] }), 'Model X Standard Range')
})

test('Model X Long Range', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX03'] }), 'Model X Long Range')
  t.is(title({ optionCodes: ['MDLX', 'MTX10'] }), 'Model X Long Range')
})

test('Model X Long Range Plus', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX05'] }), 'Model X Long Range Plus')
  t.is(title({ optionCodes: ['MDLX', 'MTX07'] }), 'Model X Long Range Plus')
})

test('Model X Performance', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX06'] }), 'Model X Performance')
  t.is(title({ optionCodes: ['MDLX', 'MTX04'] }), 'Model X Performance')
  t.is(title({ optionCodes: ['MDLX', 'MTX08'] }), 'Model X Performance')
})

test('Model X', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX12'] }), 'Model X')
  t.is(title({ optionCodes: ['MDLX', 'MTX13'] }), 'Model X')
  t.is(title({ optionCodes: ['MDLX', 'MTX15'] }), 'Model X')
})

test('Model X Plaid', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX11'] }), 'Model X Plaid')
  t.is(title({ optionCodes: ['MDLX', 'MTX14'] }), 'Model X Plaid')
})

test('Model X Plaid+', t => {
  t.is(title({ optionCodes: ['MDLX', 'MTX09'] }), 'Model X Plaid+')
})
