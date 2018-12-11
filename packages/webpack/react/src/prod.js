const base = require('./base');
const defaultOptions = require('./default');
const path = require('path')

const appPath = (location) => path.resolve(__dirname + '../../' + location);

const prod = (options = defaultOptions) => {
  console.log('\n' + 'OK, we will use default webpack function for prod \n'); 

  const entrySet = (options) => {
    const {entry} = options;
    return Object.keys(entry).reduce((r, i) => ({ ...r, [i]: appPath(entry[i])}), {})
  }
  entrySet(options);

  return Object.assign({}, base, options, {
    entry: entrySet(options),
    output: {
      path: (path.join(__dirname + `../../../`, options.output.path)),
    },
    devtool: 'nosources-source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: appPath('/node_modules/'),
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['env', 'react'],
        },
      }],
    },
  })
}

module.exports = prod;
