const representationToInput = require('./representation-to-input');

const buildTestCases = (symbols) => {
  return Object.keys(symbols).map(key => {
    const {value, representation} = symbols[key];
    return {
      value,
      input: representationToInput(representation)
    };
  });
};

module.exports = buildTestCases;
