var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var path = {
  app: 'app',
  dist: 'dist',
  public: 'public/**/*.*',
  vendor: 'vendor/**/*.*',
  styles: 'app/styles/*.scss'
};

gulp.task('sass', function () {
  gulp.src(path.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.dist));
});

gulp.task('server', function() {
  connect.server({
    root: './dist',
    port: 4200,
    livereload: true
  });
});

gulp.task('browserify', function() {
  gulp.src(path.app + '/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.dist));
});

gulp.task('copy', function() {
  gulp.src([path.app + '/index.html', path.public, path.vendor])
    .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function() {
  gulp.watch(path.app + '/**/*.*', ['browserify', 'sass', 'copy']);
});

gulp.task('default', ['server', 'browserify', 'sass', 'copy', 'watch']);

