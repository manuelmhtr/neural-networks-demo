const {Schema} = require('mongoose');
const {getMongooseConnection} = require('../../config');
const mongoose = getMongooseConnection();

const NeuralNetworkSchema = new Schema({
  // Performance
  accuracy: {type: Number, min: 0, max: 1},
  trainingInterations: {type: Number, required: true, default: 0},

  // Architecture
  inputsNum: {type: Number, required: true},
  hiddensNum: {type: Number, required: true},
  outputsNum: {type: Number, required: true},
  symbols: {
    type: Schema.Types.Mixed,
    required: true,
    validate: {
      validator: validateInputs,
      message: 'One or more symbols are not a valid'
    }
  },
  model: {type: Schema.Types.Mixed, required: true},
  learningRate: {type: Number, required: true},

  // Dates
  createdAt: {type: Date, required: true},
  updatedAt: {type: Date, required: true}
});

function validateInputs(inputs) {
  return Object.keys(inputs).every(key => {
    const {value, representation} = inputs[key];
    return value !== undefined && !!representation;
  });
}

module.exports = mongoose.model('NeuralNetwork', NeuralNetworkSchema);
