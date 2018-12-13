const defaultOptions = require('./default');
const path = require('path');

const optionsFallback = options => {
 if (typeof options !== 'object') {
    console.log('loading default options')
    return defaultOptions;
  }
  return options;
}

const appPath = (location) => path.resolve(__dirname + '../../../' + location);
const absoluteEntry = entry => Object.keys(entry).reduce((r, i) => ({ ...r, [i]: appPath(entry[i])}), {});


module.exports = {
  optionsFallback,
  appPath,
  absoluteEntry
};