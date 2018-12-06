const {config} = require('../src');
const path = require('path');

const options = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: ('/new/js'),
    publicPath: 'new/js',
    filename: '[name].js',
  },
};

module.exports = config();
