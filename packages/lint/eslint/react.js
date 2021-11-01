const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { react } = eslint;

const set = new GenerateConfig();
const config = set
  .addConfig(react)
  .setup;

module.exports = config;
