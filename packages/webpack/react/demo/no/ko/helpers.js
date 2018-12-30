const path = require('path');

const appPath = (location) => path.resolve(__dirname + '../../../' + location);
const absoluteEntry = entry => Object.keys(entry).reduce((r, i) => ({ ...r, [i]: appPath(entry[i])}), {});


module.exports = {
  appPath,
  absoluteEntry
};