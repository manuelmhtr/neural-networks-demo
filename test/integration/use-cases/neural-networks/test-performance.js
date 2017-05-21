const database = require(`${__root}/database`);
const testNeuralNetwork = require(`${__root}/use-cases/neural-networks/test-performance`);
const neuralNetworkFixture = require('./fixtures/neural-network');
const {connectMongoDatabase, resetMongoCollections, insertMongoFixtures} = testUtils;
const NEURAL_NETWORK_ID = neuralNetworkFixture._id.toString();

describe('Test Neural Network performance', () => {
  beforeEach(() => {
    const fixtures = { neuralnetworks: [neuralNetworkFixture] };
    return connectMongoDatabase()
      .then(resetMongoCollections(['neuralnetworks']))
      .then(insertMongoFixtures(fixtures));
  });

  it('should return a neural network model', () => {
    const id = NEURAL_NETWORK_ID;
    const iterations = 100;
    const params = {database, id, iterations};

    return testNeuralNetwork(params)
      .then(neuralNetwork => {
        expect(neuralNetwork).to.be.an('object');
        expect(neuralNetwork.id).to.be.equal(id);
        expect(neuralNetwork.accuracy).to.be.a('number');
        expect(neuralNetwork.accuracy >= 0).to.be.equal(true);
        expect(neuralNetwork.accuracy <= 1).to.be.equal(true);
      });
  });
});
