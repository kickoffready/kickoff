module.exports = {
  entry: {
    app: './src/index.js',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  resolve: {
    modules: [
      'node_modules',
    ],
  },
};
