const { GenerateConfig } = require('@kickoffready/generate-config');
const {stylelint} = require('../lib/lint')
const {rules} = stylelint;
const {  smacssBem,
  standard,
  autoFix,
  designSystem,
  sass,
  flatStyling,
  designSystemCSS,
} = rules

const set = new GenerateConfig();
const config = set
  .addConfig(standard)
  .addConfig(smacssBem)
  .addConfig(designSystem)
  .addConfig(sass)
  .addConfig(flatStyling)
  .addConfig(autoFix)
  .addConfig(designSystemCSS)
  .setup;

  console.log(config);

module.exports = config;