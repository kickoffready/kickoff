

'use strict';
const dev = require('./dev');
const prod = require('./prod');
const config = options => {
  let settings;
  if(process.env.NODE_ENV === 'prod') {
    console.log('building bundle for production')
    settings = prod(options);
  }
  
  if(process.env.NODE_ENV === 'dev') {
    console.log('loading dev server')
    console.log('check your bundle at http://localhost:8080/webpack-dev-server')
    console.log( 'for hmr you will need -- if (module.hot) module.hot.accept()')
    settings = dev(options);
  }
  
  return settings;
}


module.exports= {
  dev,
  prod,
  config
}