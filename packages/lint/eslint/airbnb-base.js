const { GenerateConfig } = require('@kickoffready/generate-config');
const airbnb = require('../lib/eslint/airbnb-base.set');

const set = new GenerateConfig();
const config = set
  .addConfig(airbnb)
  .setup;

module.exports = config;
