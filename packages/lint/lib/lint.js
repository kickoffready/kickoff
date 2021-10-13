const base = require('./eslint/base.set');
const airbnbBase = require('./eslint/airbnb-base.set');
const ts = require('./eslint/ts.config')

module.exports = {
  eslint: {
    base,
    airbnbBase,
    ts,
  },
};
