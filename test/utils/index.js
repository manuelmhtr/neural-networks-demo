const connectMongoDatabase = require('./connect-database/mongo');
const insertMongoFixtures = require('./insert-fixtures/mongo');
const resetMongoCollections = require('./reset-collections/mongo');

module.exports = {
  connectMongoDatabase,
  insertMongoFixtures,
  resetMongoCollections
};
