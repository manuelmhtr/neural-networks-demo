const representationToInput = (representation) => {
  return representation.reduce((input, row) => input.concat(row), []);
};

module.exports = representationToInput;
