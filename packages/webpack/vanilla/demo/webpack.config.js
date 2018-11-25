let config;
const {prod, dev} = require('ko-webpack-vanilla');
const path = require('path');

if(process.env.NODE_ENV === 'prod') {
  config = prod();
}

if(process.env.NODE_ENV === 'dev') {
  config = dev();
}

if(typeof(config) !== 'object') {
  console.log('\n' + 'Oh my, we missing NODE_ENV set, that is bad' + '\n'); 
  return;
}

module.exports = config;
