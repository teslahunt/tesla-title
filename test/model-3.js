'use strict'

const test = require('ava')

const title = require('..')

test('Model 3', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT322'] }), '')
  t.is(title({ optionCodes: ['MDL3', 'MT351'] }), '')
})

test('Model 3 Standard Range', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT300'] }), 'Standard Range')
})

test('Model 3 Mid Range', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT305'] }), 'Mid Range')
  t.is(title({ optionCodes: ['MDL3', 'MT307'] }), 'Mid Range')
})

test('Model 3 Standard Range Plus', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT301'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT308'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT309'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT314'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT320'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT327'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT332'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT333'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT336'] }), 'Standard Range Plus')
  t.is(title({ optionCodes: ['MDL3', 'MT337'] }), 'Standard Range Plus')
})

test('Model 3 Long Range RWD', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT302'] }), 'Long Range RWD')
  t.is(title({ optionCodes: ['MDL3', 'MT341'] }), 'Long Range RWD')
  t.is(title({ optionCodes: ['MDL3', 'MT334'] }), 'Long Range RWD')
  t.is(title({ optionCodes: ['MDL3', 'MT356'] }), 'Long Range RWD')
})

test('Model 3 Long Range AWD', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT303'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT310'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT315'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT316'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT321'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT323'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT324'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT328'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT352'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT354'] }), 'Long Range AWD')
  t.is(title({ optionCodes: ['MDL3', 'MT357'] }), 'Long Range AWD')
})

test('Model 3 Performance', t => {
  t.is(title({ optionCodes: ['MDL3', 'MT304'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT317'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT325'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT329'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT339'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT340'] }), 'Performance')
  t.is(title({ optionCodes: ['MDL3', 'MT353'] }), 'Performance')
})
