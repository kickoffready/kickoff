const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { airbnbBase } = eslint;

const set = new GenerateConfig();
const config = set
  .addConfig(airbnbBase)
  .setup;

module.exports = config;
