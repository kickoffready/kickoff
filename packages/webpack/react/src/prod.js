const base = require('./base');
const defaultOptions = require('./default');
const path = require('path')

const prod = (options = defaultOptions) => {
  console.log('\n' + 'OK, we will use default webpack function for prod \n'); 
  return Object.assign({}, base, options, {
    output: {
      path: (path.join(__dirname + `../../../`, options.output.path)),
    },
    devtool: 'nosources-source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
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
