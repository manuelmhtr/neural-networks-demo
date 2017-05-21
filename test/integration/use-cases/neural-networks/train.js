const database = require(`${__root}/database`);
const trainNeuralNetwork = require(`${__root}/use-cases/neural-networks/train`);
const neuralNetworkFixture = require('./fixtures/neural-network');
const {connectMongoDatabase, resetMongoCollections, insertMongoFixtures} = testUtils;
const NEURAL_NETWORK_ID = neuralNetworkFixture._id.toString();

describe('Train Neural Network', () => {
  beforeEach(() => {
    const fixtures = { neuralnetworks: [neuralNetworkFixture] };
    return connectMongoDatabase()
      .then(resetMongoCollections(['neuralnetworks']))
      .then(insertMongoFixtures(fixtures));
  });

  it('should keep model weights without training', () => {
    const id = NEURAL_NETWORK_ID;
    const initialWeights = getModelWeights(neuralNetworkFixture);

    return database.findNeuralNetworkById(id)
      .then(neuralNetwork => {
        const currentWeights = getModelWeights(neuralNetwork);
        expect(initialWeights).to.be.deep.equal(currentWeights);
        expect(neuralNetwork.trainingInterations).to.be.equal(0);
      });
  });

  it('should change model weights after training', () => {
    const id = NEURAL_NETWORK_ID;
    const input = [0, 0, 0];
    const expectedValue = 2;
    const params = {database, id, input, expectedValue};
    const initialWeights = getModelWeights(neuralNetworkFixture);

    return trainNeuralNetwork(params)
      .then(neuralNetwork => {
        const currentWeights = getModelWeights(neuralNetwork);
        expect(currentWeights).to.be.an('array');
        expect(initialWeights.length).to.be.equal(currentWeights.length);
        expect(initialWeights).not.to.be.deep.equal(currentWeights);
        expect(neuralNetwork.trainingInterations).to.be.equal(1);
      });
  });
});

const getModelWeights = ({model}) => {
  return model.connections.map(c => c.weight);
};
