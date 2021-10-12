const base = require('../lib/eslint/base.set');
const { GenerateConfig } = require('@kickoffready/generate-config');

const set = new GenerateConfig();
const config = set
  .addConfig(base)
  .setup;

module.exports = config;