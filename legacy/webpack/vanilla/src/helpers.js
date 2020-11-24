const defaultOptions = require('./default');
const optionsFallback = options => {
 if (typeof options !== 'object') {
    console.log('loading default options')
    return defaultOptions;
  }
  return options;
}

module.exports = {
  optionsFallback
};