'use strict';
const dev = require('./dev');
const prod = require('./prod');
const helpers = require('./helpers');
const config = options => {
  let settings;
  const set =  helpers.optionsFallback(options);
  if(process.env.NODE_ENV === 'prod') {
    settings = prod(set);
  }
  
  if(process.env.NODE_ENV === 'dev') {
    settings = dev(options);
  }
  
  return settings;
}


module.exports= {
  dev,
  prod,
  config
}