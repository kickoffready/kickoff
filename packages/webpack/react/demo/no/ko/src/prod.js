const path = require('path');
const appPath = (location) => path.resolve(__dirname + '../../../../' + location);

const prod = (options) => {
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
  if(!options) {
    return config;
  }
  const {entry, output} = options;
  if(entry) {
    const entrySet = Object.keys(entry).reduce((r, i) => ({ ...r, [i]: appPath(entry[i])}), {});
    config.entry = entrySet;
  }

  if(output) {
    const {path} = output;
    console.log(path);
    config.output = {};
    config.output.path = appPath(path);
  }

  return config; 
}

module.exports = prod; 