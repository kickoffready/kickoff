const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const { react } = eslint;

const reactRules = eslint.rules.react;

const set = new GenerateConfig();
const config = set
  .addConfig(react)
  .addConfig(reactRules)
  .setup;
console.log(JSON.stringify(config, null, 2));
module.exports = config;
