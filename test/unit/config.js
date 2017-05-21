const config = require(`${__root}/config`);
const allSymbols = require(`${__root}/config/symbols`);

describe('Config', () => {
  describe('Get symbols', () => {
    it('should return an object with all possbile symbols', () => {
      const symbols = config.getSymbols();
      const fullSymbolsLength = Object.keys(allSymbols).length;

      expect(symbols).to.be.an('object');
      expect(Object.keys(symbols).length).to.be.equal(fullSymbolsLength);
      Object.keys(symbols).forEach(i => expectInputStructure(symbols[i]));
    });

    it('should return N symbols if limit is specified', () => {
      const limit = 5;
      const symbols = config.getSymbols(limit);

      expect(symbols).to.be.an('object');
      expect(Object.keys(symbols).length).to.be.equal(limit);
      Object.keys(symbols).forEach(i => expectInputStructure(symbols[i]));
    });
  });
});

const expectInputStructure = (input) => {
  expect(input).to.be.an('object');
  expect(input.value).to.be.a('number');
  expect(input.representation).to.be.an('array');
  expectReponsentationStructure(input.representation);
};

const expectReponsentationStructure = (representation) => {
  const expectedWidth = 5;
  const expectedHeight = 7;

  expect(representation).to.be.an('array');
  expect(representation.length).to.be.equal(expectedHeight);

  representation.forEach(row => {
    expect(row).to.be.an('array');
    expect(row.length).to.be.equal(expectedWidth);
    row.forEach(n => {
      expect(n === 0 || n === 1).to.be.equal(true);
    });
  });
};
