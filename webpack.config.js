const webpack = require('webpack'),
  path =  require('path');

/* TODO build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
*/

module.exports = {
  devtool: 'eval',
  devServer: {
    historyApiFallback: true
  },

  entry: {
    app: './assets/js/src/app.js',
    main: './assets/js/src/main.js',
    page: './assets/js/src/page.js'
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    axios: 'axios'
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
    filename: '[name]-bundle.js'
  },
/* TODO: build config.js
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ],
*/
  resolve: {
    modules: [
      'node_modules'
    ]
  }
};
