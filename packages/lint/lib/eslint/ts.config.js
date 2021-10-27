module.exports = (pathToTsConfig) => ({
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:import/typescript',
  ],
  parserOptions: {
    project: pathToTsConfig,
  },
});
