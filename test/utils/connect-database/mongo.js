const {MongoClient} = require('mongodb');
const {getMongoUri} = require('../../../config');

function resetMongoDatabase(dbConfig) {
  return MongoClient.connect(getMongoUri());
};

module.exports = resetMongoDatabase;
