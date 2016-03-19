
/*eslint-disable */
var webpack = require('webpack'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
  entry: {
  	page: 	'./assets/js/src/page.js',
  },
  output: {
    path: ('./build/js'),
    publicPath:'build/js',
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
