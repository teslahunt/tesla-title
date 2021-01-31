'use strict'

const condenseWhitespace = require('condense-whitespace')
const { castArray, find } = require('lodash')

// const sentry = require('./sentry')

/**
 * TODO: Add
 *  Model S Standard Range
 */
const MODEL_S = {
  'Model S 60D': [['BT60', 'DV4W']],
  'Model S 60': [['BT60', 'DV2W']],
  'Model S 70': [['BT70', 'DV2W']],
  'Model S 70D': [['BT70', 'DV4W']],
  'Model S 75': [['BTX5', 'DV2W']],
  'Model S 75D': [['BTX5', 'DV4W']],
  'Model S P85+': [['PX01']],
  'Model S P85': [['BT85', 'X024', 'DV2W']],
  'Model S 85': [['BT85', 'DV2W']],
  'Model S 85D': [['BT85', 'DV4W']],
  'Model S P85D': [['P85D']],
  'Model S P90D': [
    ['X024', 'BTX4', 'DV4W'],
    ['X024', 'PX4D', 'DV4W']
  ],
  'Model S 90': [['BTX4', 'DV2W']],
  'Model S 90D': [['BTX4', 'DV4W']],
  'Model S P100D': [['BTX6', 'X024', 'DV4W']],
  'Model S 100D': [['BTX6', 'DV4W']],
  'Model S Standard Range': [['MTS01']],
  'Model S Long Range': [['MTS03'], ['MTS05']],
  'Model S Performance': [['MTS04'], ['MTS06'], ['MTS08']],
  'Model S Long Range Plus': [['MTS07']]
}

const MODEL_X = {
  'Model X 75D': [['BTX5', 'DV4W']],
  'Model X P90D': [['BTX4', 'X024', 'DV4W']],
  'Model X 90D': [['BTX4', 'DV4W']],
  'Model X P100D': [['BTX6', 'X024', 'DV4W']],
  'Model X 100D': [['BTX6', 'DV4W']],
  'Model X Standard Range': [['MTX01']],
  'Model X Long Range': [['MTX03']],
  'Model X Long Range Plus': [['MTX05'], ['MTX07']],
  'Model X Performance': [['MTX04'], ['MTX06'], ['MTX08']]
}

const MODEL_3 = {
  'Model 3 Standard Range': [['MT300']],
  'Model 3 Standard Range Plus': [
    ['MT301'],
    ['MT308'],
    ['MT314'],
    ['MT336'],
    ['MT337'],
    ['MT320']
  ],
  'Model 3 Mid Range': [['MT305']],
  'Model 3 Long Range RWD': [['MT302']],
  'Model 3 Long Range AWD': [['MT303'], ['MT310'], ['MT315'], ['MT316']],
  'Model 3 Performance': [['MT304'], ['MT311'], ['MT317']]
}

const getCollection = optionCodes => {
  if (optionCodes.includes('MDLS')) return MODEL_S
  if (optionCodes.includes('MDLX')) return MODEL_X
  if (optionCodes.includes('MDL3')) return MODEL_3
  // TODO: Add Model Y
}

const fromOptionCodes = ({ vin, optionCodes, description, model }) => {
  const collection = getCollection(optionCodes)

  let result

  find(collection, (values, key) => {
    const isMatch = castArray(values).some(values =>
      values.every(item => optionCodes.includes(item))
    )
    return isMatch && (result = key)
  })

  if (!result) {
    console.log('not titled detected', { vin, optionCodes })
    // sentry.warning('not titled detected', { vin, optionCodes })
    return condenseWhitespace(model + ' ' + description.replace(model, ''))
  }

  return result
}

module.exports = optionCodes => fromOptionCodes(optionCodes)
