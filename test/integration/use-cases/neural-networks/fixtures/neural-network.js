const {ObjectId} = require('mongodb');

module.exports = {
  _id: ObjectId('5921da98847f844e1c6a3e48'),
  __v: 0,
  accuracy: 0.0,
  symbols: {
    1: {
      representation: [
        [0], [0], [1]
      ],
      value: 0
    },
    2: {
      representation: [
        [1], [0], [1]
      ],
      value: 1
    },
    3: {
      representation: [
        [1], [1], [1]
      ],
      value: 2
    }
  },
  inputsNum: 3,
  hiddensNum: 2,
  outputsNum: 1,
  learningRate: 0.1,
  model: {
    connections: [{
      gater: null,
      weight: 0.09599423541352087,
      to: '3',
      from: '0'
    }, {
      gater: null,
      weight: -0.03626112571709399,
      to: '4',
      from: '0'
    }, {
      gater: null,
      weight: -0.018002438176928592,
      to: '3',
      from: '1'
    }, {
      gater: null,
      weight: -0.04936806045318059,
      to: '4',
      from: '1'
    }, {
      gater: null,
      weight: 0.06674634548696656,
      to: '3',
      from: '2'
    }, {
      gater: null,
      weight: 0.0982576672182108,
      to: '4',
      from: '2'
    }, {
      gater: null,
      weight: 0.010515102980195756,
      to: '5',
      from: '3'
    }, {
      gater: null,
      weight: -0.03672786937644394,
      to: '5',
      from: '4'
    }],
    neurons: [{
      squash: 'LOGISTIC',
      layer: 'input',
      bias: -0.011218092410369834,
      activation: 0,
      old: 0,
      state: 0
    }, {
      squash: 'LOGISTIC',
      layer: 'input',
      bias: -0.047639200393173375,
      activation: 0,
      old: 0,
      state: 0
    }, {
      squash: 'LOGISTIC',
      layer: 'input',
      bias: -0.0747841965634653,
      activation: 0,
      old: 0,
      state: 0
    }, {
      squash: 'LOGISTIC',
      layer: '0',
      bias: 0.03562252121341358,
      activation: 0,
      old: 0,
      state: 0
    }, {
      squash: 'LOGISTIC',
      layer: '0',
      bias: 0.027756178175284807,
      activation: 0,
      old: 0,
      state: 0
    }, {
      squash: 'LOGISTIC',
      layer: 'output',
      bias: -0.0742917543926081,
      activation: 0,
      old: 0,
      state: 0
    }]
  },
  createdAt: new Date('2017-05-21T18:21:12.000Z'),
  updatedAt: new Date('2017-06-21T18:21:12.000Z')
};
