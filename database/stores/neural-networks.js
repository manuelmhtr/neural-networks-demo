const {omit} = require('lodash');
const NeuralNetwork = require('../mongoose-models/neural-network');

const neuralNetworksStore = {
  insert: (data) => {
    const dates = {createdAt: new Date(), updatedAt: new Date()};
    Object.assign(data, dates);

    return new Promise((resolve, reject) => {
      NeuralNetwork.create(data, (error, result) => {
        if (error) return reject(error);
        resolve(parseFromDatabase(result));
      });
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      NeuralNetwork.findById(id, (error, result) => {
        if (error) return reject(error);
        resolve(parseFromDatabase(result));
      });
    });
  },

  update: (id, updateQuery) => {
    const dates = {updatedAt: new Date()};
    Object.assign(updateQuery, dates);

    return new Promise((resolve, reject) => {
      const findQuery = {_id: id};
      const options = {new: true};
      NeuralNetwork.findOneAndUpdate(findQuery, updateQuery, options, (error, result) => {
        if (error) return reject(error);
        resolve(parseFromDatabase(result));
      });
    });
  }
};

const parseFromDatabase = (data) => {
  const id = data._id.toString();
  return Object.assign({id}, omit(data.toJSON(), ['_id', '__v']));
};

module.exports = neuralNetworksStore;
