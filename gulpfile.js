const gulp = require('gulp'),
  options = {
    cssFolder: 'dist/css'
  };

require('sl-gt-synclint')(gulp);
require('sl-gt-sass-autoprefixer')(gulp, options);
