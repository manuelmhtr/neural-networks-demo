const {fill} = require('lodash');

const valueToOutput = (value, outputSize) => {
  const output = fill(new Array(outputSize), 0);

  output[value] = 1;

  return output.slice(0, outputSize);
};

module.exports = valueToOutput;
