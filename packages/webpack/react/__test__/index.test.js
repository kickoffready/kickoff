const {prod} = require('../src');

const path = require('path');

describe('prod', () => {
  it('shall take options', () => {
    const options = {
      entry: {
        app: './assets/index.js',
      },
    
      output: {
        path: '/build/js',
        publicPath: 'build/js',
        filename: '[name].js',
      },
    }
    const build = prod(options);
    expect(build.entry).toEqual(options.entry);
    expect(build.output.path).toEqual(path.join(__dirname + `../../../`, options.output.path));
  })
})