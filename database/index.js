const neuralNetworksStore = require('./stores/neural-networks');

const database = {
  insertNeuralNetwork: (neuralNetwork) => {
    return neuralNetworksStore.insert(neuralNetwork);
  },

  findNeuralNetworkById: (id) => {
    return neuralNetworksStore.findById(id);
  },

  updateNeuralNetwork: (id, updateQuery) => {
    return neuralNetworksStore.update(id, updateQuery);
  }
};

module.exports = database;
