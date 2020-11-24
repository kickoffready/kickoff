const {appPath, absoluteEntry} = require('./helpers');

const config = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'production',
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react'],
      },
    }],
  },
};

const prod = (options) => {
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
    config.output = {};
    config.output.filename = output.filename;
    config.output.path = appPath(path);
  }

  return config; 
}

module.exports = prod;