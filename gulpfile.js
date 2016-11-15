var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var mmq = require('gulp-merge-media-queries');
var imagemin = require('gulp-imagemin');
var symlink = require('gulp-sym');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
gulp.task('sass', function(){
  return gulp.src('build/scss/**/*.+(scss|sass)')
  .pipe(sass()) // Using gulp-sass
  .pipe(gulp.dest('build/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});
gulp.task('mmq', function () { // Multiple media queries
  gulp.src('build/**/*.css')
    .pipe(mmq({
      log: true
    }))
    .pipe(gulp.dest('dist'));
});
gulp.task('useref', function(){
  return gulp.src('build/**/*.+(html|php)')
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulpIf('*.css', cssnano()))
  .pipe(gulp.dest('dist'))
});
gulp.task('images', function(){
  return gulp.src('build/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function(){
  return gulp.src('build/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});
gulp.task('clean:dist', function(){
  return del.sync('dist');
})
gulp.task('alias-folders', function(){ 
  return gulp.src('build/images')
  .pipe(symlink('dist/images'))
  return gulp.src('build/fonts')
  .pipe(symlink('dist/fonts'))
});
gulp.task('cache:clear', function(){
  return cache.clearAll(callback)
});
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'build'
      },
    })
});
// gulp watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('build/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('build/**/*.+(html|php)', browserSync.reload);
  gulp.watch('build/js/**/*.js', browserSync.reload);
});
gulp.task('build', function(callback){
  runSequence('clean:dist','alias-folders',
    ['sass', 'mmq', 'useref', 'images', 'fonts'],
    callback
  )
});
gulp.task('default', function (callback){
  runSequence(['sass', 'browserSync', 'watch'],
  callback
  )
});
