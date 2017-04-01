const webpack = require('webpack'),
  path =  require('path'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app: './assets/js/src/main.js',
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
