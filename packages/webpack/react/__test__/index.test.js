const {prod} = require('../src');

const path = require('path');

const fullPath = string => path.join(__dirname + `../../../`, string);

describe('prod', () => {
  it('shall transform options', () => {
    const options = {
      entry: {
        app: 'assets/index.js',
        page: 'assets/page.js',
      },
    
      output: {
        path: '/build/js',
        publicPath: 'build/js',
        filename: '[name].js',
      },
    }
    const build = prod(options);
    expect(build.output.path).toEqual( fullPath(options.output.path));
    expect(build.entry.page).toEqual(fullPath(options.entry.page));
    expect(build.entry.app).toEqual(fullPath(options.entry.app));
  })
})