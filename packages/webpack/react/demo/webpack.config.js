const {config} = require('ko-webpack-react');
const util = require('util');
const path  = require('path');

// const {config} =  require('./no/ko/src/');

const options = {
  entry: {
    app: '/src/index.js',
    new: '/src/index.js'
  },

  output: {
    path: ('/assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js',
  }
};

// console.log(util.inspect(config(options), {showHidden: false, depth: null}))

module.exports = config(options);
