const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { ts, airbnbBase } = eslint;

const settings = ts('./tsconfig.json');

const set = new GenerateConfig();
const config = set
  .addConfig(airbnbBase)
  .addConfig(settings)
  .setup;

module.exports = config;
