const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { base } = eslint;

const set = new GenerateConfig();
const config = set
  .addConfig(base)
  .setup;

module.exports = config;
