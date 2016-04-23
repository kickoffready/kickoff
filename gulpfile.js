var gulp = require('gulp'),
  eslint = require('gulp-eslint');
require('sl-gt-synclint')(gulp);

//should add exclude at src
//should use json for setting

gulp.task('eslint', function eslintGl() {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
