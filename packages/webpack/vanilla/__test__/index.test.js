const prod = require('../src/prod');
const path = require('path');

describe('prod', () => {
  it('shall take options', () => {
    const options = {
      entry: {
        app: './assets/index.js',
      },
    
      output: {
        path: (path.join(__dirname + `../../`, '/build/js')),
        publicPath: 'build/js',
        filename: '[name].js',
      },
    }
    const build = Object.assign({},prod,options);
    expect(build.entry).toEqual(options.entry);
    expect(build.output).toEqual(options.output);
  })
})