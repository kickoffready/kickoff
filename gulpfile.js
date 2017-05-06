const gulp = require('gulp'),
  options = {
  };

require('sl-gt-synclint')(gulp);
require('sl-gt-sass-autoprefixer')(gulp, options);
