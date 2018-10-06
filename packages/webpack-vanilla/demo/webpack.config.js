let config;
const {prod, dev} = require('ko-webpack-vanilla');
const path = require('path');

if(process.env.NODE_ENV === 'prod') {
  console.log('\n' + 'OK, we will use default webpack function for prod \n'); 
  config = {  
    output: {
      path: (path.join(__dirname, '/dist/js')),
      publicPath: 'dist/js',
      filename: 'app.js',
    }
  };
}

if(process.env.NODE_ENV === 'dev') {
  console.log('\n' + 'OK, we will load config for dev \n'); 
  config = dev;
}

if(typeof(config) !== 'object') {
  console.log('\n' + 'Oh my, we missing NODE_ENV set, that is bad' + '\n'); 
  return;
}

module.exports = config;
