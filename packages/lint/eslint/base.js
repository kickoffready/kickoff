const { GenerateConfig } = require('@kickoffready/generate-config');
const { base } = require('../lib/lint');

const set = new GenerateConfig();
const config = set
  .addConfig(base)
  .setup;

module.exports = config;
