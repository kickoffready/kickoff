const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { jest, base, airbnbBase } = eslint;

const set = new GenerateConfig();
const config = set
  .addConfig(base)
  .addConfig(airbnbBase)
  .addConfig(jest)
  .setup;

module.exports = config;
