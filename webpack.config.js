var webpack = require("webpack");
module.exports = {
  entry: {
  	partial: './assets/js/src/partial.js',
  	page: 	'./assets/js/src/page.js',
  },
  output: {
  	path: './assets/js/build',
    filename: '[name]-bundle.js'       
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    alias: {
      '$': 'jquery'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared', 'common-bundle.js', null, 2),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};