const base = require('./eslint/base.set');
const airbnbBase = require('./eslint/airbnb-base.set');
const ts = require('./eslint/ts.config');
const jest = require('./eslint/jest.set');

const standard = require('./stylelint/standard')

module.exports = {
  eslint: {
    base,
    airbnbBase,
    ts,
    jest,
  },
  stylelint: {
    standard
  }
};
