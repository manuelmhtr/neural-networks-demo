const getRandomInput = (testCases) => {
  const size = testCases.length;
  const randomIndex = Math.floor(Math.random() * size);
  return testCases[randomIndex];
};

module.exports = getRandomInput;
