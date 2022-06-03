'use strict'

const { noop, castArray, find } = require('lodash')

const MODEL_S = {
  'Model S 60D': [['BT60', 'DV4W']],
  'Model S 60': [['BT60', 'DV2W']],
  'Model S 70': [['BT70', 'DV2W']],
  'Model S 70D': [['BT70', 'DV4W']],
  'Model S 75': [
    ['BTX5', 'DV2W'],
    ['BTX7', 'DV2W'],
    ['BTX8', 'DV2W']
  ],
  'Model S 75D': [
    ['BTX5', 'DV4W'],
    ['BTX7', 'DV4W'],
    ['BTX8', 'DV4W']
  ],
  'Model S P85+': [['PX01']],
  'Model S P85': [
    ['BT85', 'X024', 'DV2W'],
    ['PBT85', 'X024', 'DV2W']
  ],
  'Model S 85': [['BT85', 'DV2W']],
  'Model S 85D': [['BT85', 'DV4W']],
  'Model S P85D': [['P85D'], ['PBT85', 'X024', 'DV4W']],
  'Model S P90D': [
    ['X024', 'BTX4', 'DV4W'],
    ['X024', 'PX4D', 'DV4W']
  ],
  'Model S 90': [['BTX4', 'DV2W']],
  'Model S 90D': [['BTX4', 'DV4W']],
  'Model S P100D': [['BTX6', 'X024', 'DV4W']],
  'Model S 100D': [['BTX6', 'DV4W']],
  'Model S Standard Range': [['MTS01']],
  'Model S Long Range': [['MTS03'], ['MTS05'], ['MTS10']],
  'Model S Performance': [['MTS04'], ['MTS06'], ['MTS08']],
  'Model S Long Range Plus': [['MTS07']],
  'Model S': [['MTS13']],
  'Model S Plaid': [['MTS11'], ['MTS14']],
  'Model S Plaid+': [['MTS09']]
}

const MODEL_X = {
  'Model X 75D': [
    ['BTX5', 'DV4W'],
    ['BTX7', 'DV4W'],
    ['BTX8', 'DV4W']
  ],
  'Model X P90D': [
    ['X024', 'BTX4', 'DV4W'],
    ['X024', 'PX4D', 'DV4W']
  ],
  'Model X 90D': [['BTX4', 'DV4W']],
  'Model X P100D': [['BTX6', 'X024', 'DV4W']],
  'Model X 100D': [['BTX6', 'DV4W']],
  'Model X Standard Range': [['MTX01']],
  'Model X Long Range': [['MTX03'], ['MTX10']],
  'Model X Long Range Plus': [['MTX05'], ['MTX07']],
  'Model X Performance': [['MTX04'], ['MTX06'], ['MTX08']],
  'Model X': [['MTX13']],
  'Model X Plaid': [['MTX11'], ['MTX14']],
  'Model X Plaid+': [['MTX09']]
}

const MODEL_3 = {
  'Model 3 Standard Range': [['MT300']],
  'Model 3 Standard Range Plus': [
    ['MT301'],
    ['MT308'],
    ['MT309'],
    ['MT314'],
    ['MT320'],
    ['MT322'],
    ['MT336'],
    ['MT337']
  ],
  'Model 3 Mid Range': [['MT305'], ['MT307']],
  'Model 3 Long Range RWD': [['MT302']],
  'Model 3 Long Range AWD': [
    ['MT303'],
    ['MT310'],
    ['MT315'],
    ['MT316'],
    ['MT321'],
    ['MT323'],
    ['MT324'],
    ['MT328']
  ],
  'Model 3 Performance': [['MT304'], ['MT311'], ['MT317'], ['MT340']]
}

const MODEL_Y = {
  'Model Y Standard Range': [['MTY01']],
  'Model Y Long Range RWD': [['MTY02']],
  'Model Y Long Range AWD': [
    ['MTY03'],
    ['MTY06'],
    ['MTY07'],
    ['MTY09'],
    ['MTY11']
  ],
  'Model Y Performance': [['MTY04'], ['MTY05'], ['MTY12']]
}

const getCollection = optionCodes => {
  if (optionCodes.includes('MDLS')) return MODEL_S
  if (optionCodes.includes('MDLX')) return MODEL_X
  if (optionCodes.includes('MDL3')) return MODEL_3
  if (optionCodes.includes('MDLY')) return MODEL_Y
}

const fromOptionCodes = ({ onError = noop, ...opts } = {}) => {
  const { optionCodes } = opts

  const collection = getCollection(optionCodes)

  let result

  find(collection, (values, key) => {
    const isMatch = castArray(values).some(values =>
      values.every(item => optionCodes.includes(item))
    )
    return isMatch && (result = key)
  })

  return result || onError(opts)
}

module.exports = fromOptionCodes
module.exports.MODEL_S = MODEL_S
module.exports.MODEL_X = MODEL_X
module.exports.MODEL_3 = MODEL_3
module.exports.MODEL_Y = MODEL_Y
