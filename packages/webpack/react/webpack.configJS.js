const { GenerateConfig } = require('@kickoffready/generate-config');

const {reactJs,  devSet, fileConfig} = require("./lib/webpack-react") 

const set = new GenerateConfig()
  .addConfig(reactJs)
  .addConfig(fileConfig({entry: './test/index.js', dist: '../dist'}))
  .addConfig(devSet({port: 9011}))
  .setup
console.log(JSON.stringify(set))
module.exports = set