const { GenerateConfig } = require('@kickoffready/generate-config');
const { eslint } = require('../lib/lint');

const set = new GenerateConfig();
const config = set
  .addConfig(eslint.reactTs('./tsconfig.json'))
  .setup;

console.log(JSON.stringify(config, null, 2));
module.exports = config;
