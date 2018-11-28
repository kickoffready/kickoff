const base = require('./base');
const path = require('path')

const prod = (options) => {
  const hasPath = typeof options === 'object' && typeof options.output === 'object'
  && typeof options.output.path === 'string';

  if (hasPath === false) {
    console.log('please provide output.path in your setting')
    return;
  }

  console.log('\n' + 'OK, we will use default webpack function for prod \n'); 
  return Object.assign({}, base, options, {
    output: {
      path: (path.join(__dirname + `../../../`, options.output.path)),
    }
  })
}

module.exports = prod;
