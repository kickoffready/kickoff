const base = require('./base');
const defaultOptions = require('./default');
const path = require('path')

const prod = (options = defaultOptions) => {
  console.log('\n' + 'OK, we will use default webpack function for prod \n'); 
  return Object.assign({}, base, options, {
    output: {
      path: (path.join(__dirname + `../../`, options.output.path)),
    }
  })
}

module.exports = prod;
