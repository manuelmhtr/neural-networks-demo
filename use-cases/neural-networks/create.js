const {Layer, Network} = require('synaptic');

const createNeuralNetwork = ({database, symbols, model, learningRate}) => {
  const {inputsNum, hiddensNum, outputsNum} = model;

  const getModel = () => {
    const inputLayer = new Layer(inputsNum);
    const hiddenLayer = new Layer(hiddensNum);
    const outputLayer = new Layer(outputsNum);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    const architecture = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    return architecture.toJSON();
  };

  const buildNeuralNetwork = () => {
    const neuralNetwork = {
      inputsNum,
      hiddensNum,
      outputsNum,
      symbols,
      learningRate,
      model: getModel()
    };
    return Promise.resolve(neuralNetwork);
  };

  return buildNeuralNetwork()
    .then(nn => database.insertNeuralNetwork(nn));
};

module.exports = createNeuralNetwork;
