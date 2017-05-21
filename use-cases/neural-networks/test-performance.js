const {Network} = require('synaptic');
const buildTestCases = require('./utils/build-test-cases');
const getRandomTestCase = require('./utils/get-random-test-case');
const outputToValue = require('./utils/output-to-value');

const testNeuralNetwork = ({database, id, iterations}) => {
  const makeTest = (neuralNetwork) => {
    const {symbols, model} = neuralNetwork;
    const testCases = buildTestCases(symbols);
    const network = Network.fromJSON(model);
    let successCount = 0;

    for (let index = 0; index < iterations; index++) {
      const passedTest = testRandomInput(testCases, network);
      if (passedTest) successCount += 1;
    }

    const accuracy = successCount / iterations;
    const results = { accuracy };

    return results;
  };

  return database.findNeuralNetworkById(id)
    .then(makeTest)
    .then(results => database.updateNeuralNetwork(id, results));
};

const testRandomInput = (testCases, network) => {
  const testCase = getRandomTestCase(testCases);
  const {value, input} = testCase;
  const output = network.activate(input);

  return value === outputToValue(output);
};

module.exports = testNeuralNetwork;
