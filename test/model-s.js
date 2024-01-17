'use strict'

const test = require('ava')

const title = require('..')

test('Model S 60', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT60', 'DV2W'] }), '60')
})

test('Model S 60D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT60', 'DV4W'] }), '60D')
})

test('Model S 70', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT70', 'DV2W'] }), '70')
})

test('Model S 70D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT70', 'DV4W'] }), '70D')
})

test('Model S 75', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX5', 'DV2W'] }), '75')
  t.is(title({ optionCodes: ['MDLS', 'BTX7', 'DV2W'] }), '75')
  t.is(title({ optionCodes: ['MDLS', 'BTX8', 'DV2W'] }), '75')
})

test('Model S 75D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX5', 'DV4W'] }), '75D')
  t.is(title({ optionCodes: ['MDLS', 'BTX7', 'DV4W'] }), '75D')
  t.is(title({ optionCodes: ['MDLS', 'BTX8', 'DV4W'] }), '75D')
})

test('Model S 85', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV2W'] }), '85')
})

test('Model S P85', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'X024', 'DV2W'] }), 'P85')
  t.is(title({ optionCodes: ['MDLS', 'PBT85', 'X024', 'DV2W'] }), 'P85')
})

test('Model S P85+', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV2W', 'PX01'] }), 'P85+')
})

test('Model S 85D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV4W'] }), '85D')
})

test('Model S P85D', t => {
  t.is(title({ optionCodes: ['MDLS', 'P85D'] }), 'P85D')
  t.is(title({ optionCodes: ['MDLS', 'PBT85', 'X024', 'DV4W'] }), 'P85D')
})

test('Model S 90', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX4', 'DV2W'] }), '90')
})

test('Model S 90D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX4', 'DV4W'] }), '90D')
})

test('Model S P90D', t => {
  t.is(title({ optionCodes: ['MDLS', 'X024', 'BTX4', 'DV4W'] }), 'P90D')
  t.is(title({ optionCodes: ['MDLS', 'X024', 'PX4D', 'DV4W'] }), 'P90D')
})

test('Model S 100D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX6', 'DV4W'] }), '100D')
})

test('Model S P100D', t => {
  t.is(title({ optionCodes: ['MDLS', 'X024', 'BTX6', 'DV4W'] }), 'P100D')
})

test('Model S Standard Range', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS01'] }), 'Standard Range')
  t.is(title({ optionCodes: ['MDLS', 'MTS17'] }), 'Standard Range')
})

test('Model S Long Range', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS03'] }), 'Long Range')
  t.is(title({ optionCodes: ['MDLS', 'MTS05'] }), 'Long Range')
  t.is(title({ optionCodes: ['MDLS', 'MTS10'] }), 'Long Range')
})

test('Model S Long Range Plus', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS07'] }), 'Long Range Plus')
})

test('Model S Performance', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS04'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLS', 'MTS06'] }), 'Performance')
  t.is(title({ optionCodes: ['MDLS', 'MTS08'] }), 'Performance')
})

test('Model S', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS13'] }), '')
  t.is(title({ optionCodes: ['MDLS', 'MTS18'] }), '')
})

test('Model S Plaid', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS11'] }), 'Plaid')
  t.is(title({ optionCodes: ['MDLS', 'MTS12'] }), 'Plaid')
  t.is(title({ optionCodes: ['MDLS', 'MTS14'] }), 'Plaid')
  t.is(title({ optionCodes: ['MDLS', 'MTS19'] }), 'Plaid')
})

test('Model S Plaid+', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS09'] }), 'Plaid+')
})
