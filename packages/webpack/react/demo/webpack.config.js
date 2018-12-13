const {prod} = require('ko-webpack-react');
const util = require('util');
const options = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: ('/new/js'),
    publicPath: 'new/js',
    filename: '[name].js',
  }
};

module.exports = prod(options);
