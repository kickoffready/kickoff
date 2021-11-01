const react = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
const ts = {
  rules: {
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
  },
};

module.exports = {
  react,
};
