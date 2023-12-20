'use strict'

const MODEL_S = [
  ['60D', [['BT60', 'DV4W']]],
  ['60', [['BT60', 'DV2W']]],
  ['70', [['BT70', 'DV2W']]],
  ['70D', [['BT70', 'DV4W']]],
  [
    '75',
    [
      ['BTX5', 'DV2W'],
      ['BTX7', 'DV2W'],
      ['BTX8', 'DV2W']
    ]
  ],
  [
    '75D',
    [
      ['BTX5', 'DV4W'],
      ['BTX7', 'DV4W'],
      ['BTX8', 'DV4W']
    ]
  ],
  ['P85+', [['PX01']]],
  [
    'P85',
    [
      ['BT85', 'X024', 'DV2W'],
      ['PBT85', 'X024', 'DV2W']
    ]
  ],
  ['85', [['BT85', 'DV2W']]],
  ['85D', [['BT85', 'DV4W']]],
  ['P85D', [['P85D'], ['PBT85', 'X024', 'DV4W']]],
  [
    'P90D',
    [
      ['X024', 'BTX4', 'DV4W'],
      ['X024', 'PX4D', 'DV4W']
    ]
  ],
  ['90', [['BTX4', 'DV2W']]],
  ['90D', [['BTX4', 'DV4W']]],
  ['P100D', [['BTX6', 'X024', 'DV4W']]],
  ['100D', [['BTX6', 'DV4W']]],
  ['Standard Range', [['MTS01'], ['MTS17']]],
  ['Long Range', [['MTS03'], ['MTS05'], ['MTS10']]],
  ['Performance', [['MTS04'], ['MTS06'], ['MTS08']]],
  ['Long Range Plus', [['MTS07']]],
  ['', [['MTS13']]],
  ['Plaid', [['MTS11'], ['MTS12'], ['MTS14']]],
  ['Plaid+', [['MTS09']]]
]

const MODEL_X = [
  [
    '75D',
    [
      ['BTX5', 'DV4W'],
      ['BTX7', 'DV4W'],
      ['BTX8', 'DV4W']
    ]
  ],
  [
    'P90D',
    [
      ['X024', 'BTX4', 'DV4W'],
      ['X024', 'PX4D', 'DV4W']
    ]
  ],
  ['90D', [['BTX4', 'DV4W']]],
  ['P100D', [['BTX6', 'X024', 'DV4W']]],
  ['100D', [['BTX6', 'DV4W']]],
  ['Standard Range', [['MTX01'], ['MTX17']]],
  ['Long Range', [['MTX03'], ['MTX10']]],
  ['Long Range Plus', [['MTX05'], ['MTX07']]],
  ['Performance', [['MTX04'], ['MTX06'], ['MTX08']]],
  ['', [['MTX12'], ['MTX13'], ['MTX15']]],
  ['Plaid', [['MTX11'], ['MTX14'], ['MTX16']]],
  ['Plaid+', [['MTX09']]]
]

const MODEL_3 = [
  ['', [['MT322'], ['MT351']]],
  ['Standard Range', [['MT300']]],
  [
    'Standard Range Plus',
    [
      ['MT301'],
      ['MT308'],
      ['MT309'],
      ['MT314'],
      ['MT320'],
      ['MT327'],
      ['MT332'],
      ['MT333'],
      ['MT336'],
      ['MT337']
    ]
  ],
  ['Mid Range', [['MT305'], ['MT307']]],
  ['Long Range RWD', [['MT302'], ['MT341'], ['MT334']]],
  [
    'Long Range AWD',
    [
      ['MT303'],
      ['MT310'],
      ['MT315'],
      ['MT316'],
      ['MT321'],
      ['MT323'],
      ['MT324'],
      ['MT328'],
      ['MT352']
    ]
  ],
  [
    'Performance',
    [
      ['MT304'],
      ['MT311'],
      ['MT317'],
      ['MT325'],
      ['MT329'],
      ['MT339'],
      ['MT340']
    ]
  ]
]

const MODEL_Y = [
  ['', [['MTY18'], ['MTY19']]],
  ['Standard Range', [['MTY01'], ['MTY08'], ['MTY13']]],
  ['Long Range RWD', [['MTY02']]],
  [
    'Long Range AWD',
    [
      ['MTY03'],
      ['MTY06'],
      ['MTY07'],
      ['MTY09'],
      ['MTY11'],
      ['MTY14'],
      ['MTY20']
    ]
  ],
  ['Performance', [['MTY04'], ['MTY05'], ['MTY10'], ['MTY12'], ['MTY21']]]
]

const getCollection = optionCodes => {
  if (optionCodes.includes('MDLS')) return MODEL_S
  if (optionCodes.includes('MDLX')) return MODEL_X
  if (optionCodes.includes('MDL3')) return MODEL_3
  if (optionCodes.includes('MDLY')) return MODEL_Y
}

const fromOptionCodes = ({ onError, ...opts } = {}) => {
  const { optionCodes } = opts

  const collection = getCollection(optionCodes)

  let result

  collection.find(([title, allConditions]) => {
    const isMatch = allConditions.some(conditions =>
      conditions.every(optionCode => optionCodes.includes(optionCode))
    )
    return isMatch && (result = title)
  })

  return result ?? onError?.(opts)
}

module.exports = fromOptionCodes
module.exports.MODEL_S = MODEL_S
module.exports.MODEL_X = MODEL_X
module.exports.MODEL_3 = MODEL_3
module.exports.MODEL_Y = MODEL_Y
