var webpack = require("webpack"),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
  	page1: 	'./assets/js/src/page1.js',
    page2: 	'./assets/js/src/page2.js',
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
    new webpack.optimize.CommonsChunkPlugin('common-bundle.js'),
    //new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
