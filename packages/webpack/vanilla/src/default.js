
module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: ('/dist/js'),
    publicPath: 'dist/js',
    filename: '[name].js',
  },
};
