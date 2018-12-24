// const {prod} = require('ko-webpack-react');
const util = require('util');
const path  = require('path');

const appPath = (location) => path.resolve(__dirname + location); // need a helper

//const dev =  require('./no/ko/src/dev');
const dev =require('./dev');

const options = {
  entry: {
    app: '/src/index.js',
    new: '/src/index.js'
  },

  output: {
    path: ('/dist/js'),
    publicPath: '/dist/js/',
    filename: '[name].js',
  }
};

console.log(util.inspect(dev(options), {showHidden: false, depth: null}))

module.exports = dev(options);
