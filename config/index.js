const {isInteger, pickBy} = require('lodash');
const Mongoose = require('mongoose');
const symbols = require('./symbols');

Mongoose.Promise = global.Promise;

const getSymbols = (limit) => {
  if (!isInteger(limit)) return symbols;
  return pickBy(symbols, s => s.value < limit);
};

const getMongoUri = () => 'mongodb://localhost/neural_networks_demo';

const getMongooseConnection = () => {
  return Mongoose.connect(getMongoUri());
};

const config = {
  getSymbols,
  getMongoUri,
  getMongooseConnection
};

module.exports = config;
