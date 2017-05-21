function resetMongoCollections(collectionNames) {
  return (db) => {
    const promises = collectionNames.map(cn => db.collection(cn).remove({}));
    return Promise.all(promises).then(() => db);
  };
};

module.exports = resetMongoCollections;
