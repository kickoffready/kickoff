const { GenerateConfig } = require('@kickoffready/generate-config');
const ts = require('./ts.config');
const rules = require('./rules');
const react = require('./react.set');

const set = new GenerateConfig();
const config = (pathToTsConfig) => set
  .addConfig(react)
  .addConfig(rules.reactTs)
  .addConfig(ts(pathToTsConfig))
  .setup;

module.exports = config;
