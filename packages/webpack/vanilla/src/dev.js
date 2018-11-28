const webpack = require('webpack');
const base = require('./base.js');
const defaultOptions = require('./default');

const devSet = {
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

const dev = () => {
  console.log('\n' + 'OK, we will load config for dev \n'); 
  return Object.assign({}, base, devSet)
}

module.exports = dev;
