const {cloneDeep, isEmpty} = require('lodash');

function loadMongoFixtures(fixtures) {
  return (db) => {
    const promises = Object.keys(fixtures).map(name => insert(db, name, fixtures[name]));
    return Promise.all(promises).then(() => db);
  };
};

function insert(db, collectionName, fixtures) {
  if (isEmpty(fixtures)) return Promise.resolve();
  return db.collection(collectionName).insertMany(cloneDeep(fixtures));
}

module.exports = loadMongoFixtures;
