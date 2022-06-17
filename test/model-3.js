'use strict'

const test = require('ava')

const title = require('..')

test('Model 3 Standard Range', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT300'] }), 'Model 3 Standard Range')
})

test('Model 3 Mid Range', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT305'] }), 'Model 3 Mid Range')
  t.is(title({ optionCodes: ['MDL3', 'MT307'] }), 'Model 3 Mid Range')
})

test('Model 3 Standard Range Plus', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT301'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT308'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT309'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT314'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT320'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT336'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT337'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT301'] }), 'Model 3 Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT322'] }), 'Model 3 Standard Range Plus')
})

test('Model 3 Long Range RWD', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT302'] }), 'Model 3 Long Range RWD')
})

test('Model 3 Long Range AWD', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT303'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT310'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT315'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT316'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT321'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT323'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT324'] }), 'Model 3 Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT328'] }), 'Model 3 Long Range AWD')
})

test('Model 3 Performance', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT304'] }), 'Model 3 Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT317'] }), 'Model 3 Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT325'] }), 'Model 3 Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT340'] }), 'Model 3 Performance')
})
