module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  globals: {
    spyOn: 'readonly',
  }
};