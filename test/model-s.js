'use strict'

const test = require('ava')

const title = require('..')

test('Model S 60', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT60', 'DV2W'] }), 'Model S 60')
})

test('Model S 60D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT60', 'DV4W'] }), 'Model S 60D')
})

test('Model S 70', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT70', 'DV2W'] }), 'Model S 70')
})

test('Model S 70D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT70', 'DV4W'] }), 'Model S 70D')
})

test('Model S 75', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX5', 'DV2W'] }), 'Model S 75')
})

test('Model S 75D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX5', 'DV4W'] }), 'Model S 75D')
})

test('Model S 85', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV2W'] }), 'Model S 85')
})

test('Model S P85', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'X024', 'DV2W'] }), 'Model S P85')
})

test('Model S P85+', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV2W', 'PX01'] }), 'Model S P85+')
})

test('Model S 85D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BT85', 'DV4W'] }), 'Model S 85D')
})

test('Model S P85D', t => {
  t.is(title({ optionCodes: ['MDLS', 'P85D'] }), 'Model S P85D')
})

test('Model S 90', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX4', 'DV2W'] }), 'Model S 90')
})

test('Model S 90D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX4', 'DV4W'] }), 'Model S 90D')
})

test('Model S P90D', t => {
  t.is(title({ optionCodes: ['MDLS', 'X024', 'BTX4', 'DV4W'] }), 'Model S P90D')
  t.is(title({ optionCodes: ['MDLS', 'X024', 'PX4D', 'DV4W'] }), 'Model S P90D')
})

test('Model S 100D', t => {
  t.is(title({ optionCodes: ['MDLS', 'BTX6', 'DV4W'] }), 'Model S 100D')
})

test('Model S P100D', t => {
  t.is(
    title({ optionCodes: ['MDLS', 'X024', 'BTX6', 'DV4W'] }),
    'Model S P100D'
  )
})

test('Model S Standard Range', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS01'] }), 'Model S Standard Range')
})

test('Model S Long Range', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS03'] }), 'Model S Long Range')
  t.is(title({ optionCodes: ['MDLS', 'MTS05'] }), 'Model S Long Range')
})

test('Model S Long Range Plus', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS07'] }), 'Model S Long Range Plus')
})

test('Model S Long Performance', t => {
  t.is(title({ optionCodes: ['MDLS', 'MTS04'] }), 'Model S Performance')
  t.is(title({ optionCodes: ['MDLS', 'MTS06'] }), 'Model S Performance')
  t.is(title({ optionCodes: ['MDLS', 'MTS08'] }), 'Model S Performance')
})
