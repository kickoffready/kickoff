var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importCss = require('gulp-import-css'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    bulkSass = require('gulp-sass-bulk-import');

// make layout loads after structure
gulp.task('rn-layout',function(){
  return gulp.src('assets/scss/**/*layout.scss')
    .pipe(rename(function(opt){
      opt.basename = opt.basename.replace('-layout', '-xyz');
      return opt;
    }))
    .pipe(gulp.dest('assets/scss'));
});

gulp.task('rm-layout',function(){
  gulp.src('assets/scss/**/*layout.scss')
  .pipe(clean());
});

gulp.task('rn-xyz',function(){
  return gulp.src('assets/scss/**/*xyz.scss')
    .pipe(rename(function(opt){
      opt.basename = opt.basename.replace('-xyz', '-layout');
      return opt;
    }))
    .pipe(gulp.dest('assets/scss'));
});

gulp.task('rm-xyz',function(){
  gulp.src('assets/scss/**/*xyz.scss')
  .pipe(clean());
});


gulp.task('css-init',['rn-layout','rm-layout']);
gulp.task('css-reset',['rn-xyz','rm-xyz']);
/// end of layout scss fix

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

gulp.task('compile',['css-init','css','css-reset']);

gulp.task('watch', function() {
  gulp.watch(['assets/scss/**/*.scss'],['compile']);
});

gulp.task('min-css', function(){
  return gulp.src('build/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '-min'
        }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['watch']);
