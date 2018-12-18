const webpack = require('webpack');
const path  = require('path');

const appPath = (location) => path.resolve(__dirname, location);

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
    const pathSet = output.path;
    config.output = output;
    config.output.path = path.resolve(__dirname + pathSet);
    console.log(config.output.path);
  }
  return config;
}

module.exports = dev;