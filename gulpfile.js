var fs = require('fs'),
    path = require('path'),
    scssPath = 'assets/scss',
    gulp = require('gulp'),
    compass = require('gulp-compass'),
  	minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task('concatScss', function() {
   var folders = getFolders(scssPath);

   var tasks = folders.map(function(folder) {
      return gulp.src(path.join(scssPath, folder, '/*.scss'))
        .pipe(concat('_'+folder + '.scss'))
        .pipe(gulp.dest(scssPath))
   });

});

gulp.task('compass', ['concatScss'],function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'assets'),
      css: path.join(__dirname, 'build/css'),
      sass: 'scss'
    }));
});

gulp.task('watch', function() {
  gulp.watch(['assets/scss/**/*.scss','!assets/scss/*.scss'], ['compass']); // do not include top level
});

gulp.task('min-css', function(){
  return gulp.src('build/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '-min'
        }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['compass', 'watch']);
