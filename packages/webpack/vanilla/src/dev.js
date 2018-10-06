const webpack = require('webpack');
const base = require('./base.js');

const dev = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
  ],
};

module.exports = Object.assign(base, dev);
