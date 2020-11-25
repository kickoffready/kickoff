const { GenerateConfig } = require('@kickoffready/generate-config');

const {reactTs,  devSet, fileConfig} = require("./lib/webpack-react") 

const set = new GenerateConfig()
  .addConfig(reactTs)
  .addConfig(fileConfig({entry: './test/index.ts', dist: '../dist'}))
  .addConfig(devSet({port: 9011}))
  .setup
console.log(JSON.stringify(set))
module.exports = set