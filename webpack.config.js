
/*eslint-disable */
var webpack = require('webpack'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './assets/js/src/app.js'
  ],
  output: {
    path: ('./build/js'),
    publicPath:'build/js',
    filename: 'app-bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
   loaders: [{
     test: /\.js$/,
     loaders: ['react-hot', 'babel'],
     exclude: /node_modules/
   }]
 },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
