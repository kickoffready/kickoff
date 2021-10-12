const { GenerateConfig } = require('@kickoffready/generate-config');
const {airbnbBase}  = require('../lib/lint');

const set = new GenerateConfig();
const config = set
  .addConfig(airbnbBase)
  .setup;

module.exports = config;
