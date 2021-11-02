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

const reactTs = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    ...ts.rules,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'import/extensions': [2, { ts: 'never', tsx: 'never' }],
  },
};

module.exports = {
  react,
  reactTs,
  ts,
};
