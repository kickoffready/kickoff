var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importCss = require('gulp-import-css'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    bulkSass = require('gulp-sass-bulk-import');

gulp.task('css', function() {
    return gulp
            .src('assets/scss/main.scss')
            .pipe(bulkSass())
            .pipe(
                sass({
                    includePaths: ['assets/scss']
                }))
            .pipe(autoprefixer({
              "autoprefixer": {"browsers": ["> 2%"]}
              }))
            .pipe(importCss())
            .pipe( gulp.dest('./build/css/') );
});

gulp.task('watch', function() {
  gulp.watch(['assets/scss/**/*.scss'],['css']);
});

gulp.task('min-css', function(){
  return gulp.src('build/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '-min'
        }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['css','watch']);
