var fs = require('fs'), 
    path = require('path'),
    scssPath = 'assets/scss',
    
    gulp = require('gulp'),
    compass = require('gulp-compass'),
  	minifyCss = require('gulp-minify-css'),
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
      css: 'css',
      sass: 'scss'
    }));
});

gulp.task('watch', function() {
  gulp.watch(['assets/scss/**/*.scss','!assets/scss/*.scss'], ['compass']); // do not include top level
});

gulp.task('min-css', function(){
  return gulp.src('assets/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/build'));	
}); 

gulp.task('default', ['compass', 'watch']);