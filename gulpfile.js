var compass = require('gulp-compass'),
  	path = require('path'),
  	minifyCss = require('gulp-minify-css'),
  	gulp = require('gulp');
 
gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'assets'),
      css: 'css',
      sass: 'scss'
    }));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['compass']);
});

gulp.task('min-css', function(){
  return gulp.src('assets/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/build'));	
}); 

gulp.task('default', ['compass', 'watch']);