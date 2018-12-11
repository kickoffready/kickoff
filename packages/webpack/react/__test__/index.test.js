const {prod} = require('../src');

const path = require('path');

describe('prod', () => {
  it('shall take options', () => {
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
    expect(build.output.path).toEqual(path.join(__dirname + `../../../`, options.output.path));
    expect(build.entry.page).toEqual(path.join(__dirname + `../../`, options.entry.page));
    expect(build.entry.app).toEqual(path.join(__dirname + `../../`, options.entry.app));
  })
})