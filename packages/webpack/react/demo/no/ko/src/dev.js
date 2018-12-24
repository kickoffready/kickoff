const webpack = require('webpack');
const path  = require('path');

const appPath = (location) => path.resolve(__dirname + '../../../../' + location); // need a helper

const absoluteEntry = entry => Object.keys(entry).reduce((r, i) => ({ ...r, [i]: appPath(entry[i])}), {});

const config = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react', 'react-hmre'],
      },
    }],
  },
  mode: "development",
  devServer: {
    contentBase: appPath('/'),
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

const dev = (options) => {
  if(!options) {
    return config;
  }
  const {entry, output} = options;
  if(entry) {
    const entrySet = absoluteEntry(entry);
    config.entry = entrySet;
  }

  if(output) {
    const {path} = output;
    config.output = output;
    console.log('check your bundle at http://localhost:8080/webpack-dev-server')
    config.output.path = appPath(path);
  }
  return config;
}

module.exports = dev;