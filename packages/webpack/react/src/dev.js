const webpack = require('webpack');
const base = require('./base.js');
const defaultOptions = require('./default');

const devSet = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: __dirname,
      query: {
        presets: ['env', 'react', 'react-hmre'],
      },
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
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const dev = (options = defaultOptions) => {
  console.log('\n' + 'OK, we will load config for dev \n'); 
  return Object.assign({}, base, devSet, options)
}

module.exports = dev;