const {Network} = require('synaptic');
const valueToOutput = require('./utils/value-to-output');

const trainNeuralNetwork = ({database, id, input, expectedValue}) => {
  const makeTraining = (neuralNetwork) => {
    const {learningRate, outputsNum, model} = neuralNetwork;
    const output = valueToOutput(expectedValue, outputsNum);
    const network = Network.fromJSON(model);

    network.activate(input);
    network.propagate(learningRate, output);

    const update = {
      model: network.toJSON(),
      $inc: {trainingInterations: 1}
    };

    return database.updateNeuralNetwork(id, update);
  };

  return database.findNeuralNetworkById(id)
    .then(makeTraining);
};

module.exports = trainNeuralNetwork;
