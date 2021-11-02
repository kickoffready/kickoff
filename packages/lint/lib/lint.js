const base = require('./eslint/base.set');
const airbnbBase = require('./eslint/airbnb-base.set');
const ts = require('./eslint/ts.config');
const jest = require('./eslint/jest.set');
const react = require('./eslint/react.set');
const rules = require('./eslint/rules');
const reactTs = require('./eslint/react.ts.config');

const standard = require('./stylelint/standard');
const styleLintRules = require('./stylelint/rules');

module.exports = {
  eslint: {
    base,
    airbnbBase,
    ts,
    jest,
    react,
    rules,
    reactTs,
  },
  stylelint: {
    standard,
    rules: styleLintRules,
  },
};
