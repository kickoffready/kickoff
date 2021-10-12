const airbnb = require('../lib/eslint/airbnb-base.set');
const { GenerateConfig } = require('@kickoffready/generate-config');

const set = new GenerateConfig();
const config = set
  .addConfig(airbnb)
  .setup;

module.exports = config;