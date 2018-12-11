const path = require('path');

const appPath = (location) => path.resolve(__dirname + '/../' + location);

const prod = {
  entry: {
    app: appPath('/src/index.js'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  resolve: {
    modules: [
      'node_modules',
    ],
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: appPath('/node_modules/'),
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react'],
      },
    }],
  },
}

module.exports = prod