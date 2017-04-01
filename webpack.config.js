const webpack = require('webpack'),
  path =  require('path'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app:  './assets/js/src/app.js',
  },

  module: {
  rules: [{
    test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
    loader: 'babel-loader'
    }],
  },

  output: {
    path: (path.join(__dirname,'/build/js')),
    publicPath:'build/js',
    filename: 'main.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ],

  resolve: {
    modules: [
      'node_modules'
    ]
  }
};
