const database = require(`${__root}/database`);
const createNeuralNetwork = require(`${__root}/use-cases/neural-networks/create`);
const {connectMongoDatabase, resetMongoCollections} = testUtils;

describe('Create Neural Network', () => {
  beforeEach(() => {
    return connectMongoDatabase()
      .then(resetMongoCollections(['neuralnetworks']));
  });

  it('should return a neural network model', () => {
    const symbols = {
      1: {value: 0, representation: []},
      2: {value: 1, representation: []},
      3: {value: 2, representation: []}
    };
    const inputsNum = 3;
    const hiddensNum = 2;
    const outputsNum = 1;
    const learningRate = 0.1;
    const params = {
      database,
      symbols,
      model: {
        inputsNum,
        hiddensNum,
        outputsNum
      },
      learningRate
    };

    return createNeuralNetwork(params)
      .then(neuralNetwork => {
        expect(neuralNetwork).to.be.an('object');
        expect(neuralNetwork.id).to.be.an('string');
        expect(neuralNetwork.symbols).to.be.an('object');
        expect(neuralNetwork.model).to.be.an('object');
        expect(neuralNetwork.symbols).to.be.deep.equal(symbols);
        expect(neuralNetwork.inputsNum).to.be.equal(inputsNum);
        expect(neuralNetwork.hiddensNum).to.be.equal(hiddensNum);
        expect(neuralNetwork.outputsNum).to.be.equal(outputsNum);
        expect(neuralNetwork.learningRate).to.be.equal(learningRate);

        const {neurons} = neuralNetwork.model;
        expect(countNeuronsByLayer(neurons, 'input')).to.be.equal(inputsNum);
        expect(countNeuronsByLayer(neurons, '0')).to.be.equal(hiddensNum);
        expect(countNeuronsByLayer(neurons, 'output')).to.be.equal(outputsNum);
      });
  });
});

const countNeuronsByLayer = (neurons, layer) => {
  return neurons.filter(n => n.layer === layer).length;
};
