const flatStyling = {
  'selector-max-id': 0,
  'selector-max-type': 0,
  'selector-pseudo-class-allowed-list': ['hover', 'not', 'focus', 'active'],
  'selector-pseudo-element-allowed-list': ['before', 'after', 'placeholder'],
  'selector-max-specificity': '0,3,0',
};

const smacssBem = {
  rules: {
    ...flatStyling.rules,
    'selector-nested-pattern': '(^&(::|:|.is-|.has-|__|-)?[a-z0-9-]*[a-z0-9]$)|^&:not',
  },
};

const designSystem = {
  rules: {
    'property-disallowed-list': ['/^font/', 'color', 'line-height', '/^text-'],
    'color-named': 'never',
    'color-no-hex': true,
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
  },
};

const designSystemCSS = {
  rules: {
    ...designSystem.rules,
    'selector-class-pattern': '^([o,a,p,m,i]|is|has|__)-?[a-z0-9-_]*[a-z0-9]$',
  },
};

const autoFix = {
  rules: {
    'property-no-vendor-prefix': true,
  },
};

const standard = {
  rules: {
    'declaration-block-no-duplicate-properties': true,
  },
};

const sass = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'at-rule-disallowed-list': ['extend'],
    'max-nesting-depth': 4,
    'scss/map-keys-quotes': 'always',
  },
};

const styled = {
  extends: [
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [
    'stylelint-order',
  ],
};

module.exports = {
  smacssBem,
  standard,
  autoFix,
  designSystem,
  sass,
  flatStyling,
  designSystemCSS,
  styled,
};
