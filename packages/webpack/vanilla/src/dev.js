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
  mode: "development",
   devServer: {
     hot: true,
     progress: true,
     inline: true,
   },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = Object.assign(base, dev);
