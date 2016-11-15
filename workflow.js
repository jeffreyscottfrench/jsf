Workflow Kickstart

cd to directory

Software Environment setup:

npm init

npm install gulp --save-dev

npm install gulp-sass --save-dev

npm install browser-sync --save-dev

// if php server needed
npm install gulp-connect-php

npm install gulp-useref --save-dev

npm install gulp-uglify --save-dev

npm install gulp-cssnano

npm install gulp-imagemin --save-dev

npm install gulp-cache --save-dev

npm install del --save-dev

npm install run-sequence --save-dev

npm install gulp gulp-sass browser-sync gulp-connect gulp-useref gulp-uglify gulp-cssnano gulp-imagemin gulp-cache gulp-merge-media-queries gulp-sym del run-sequence --save-dev

Build Folder Structure


gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var php = require('gulp-connect-php'); // if needed
var del = require('del');
var runSequence = require('run-sequence');
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.+(scss|sass)')
  .pipe(sass()) // Using gulp-sass
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});
gulp.task('useref', function(){
  return gulp.src('app/**/*.+(html|php)')
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulpIf('*.css', cssnano()))
  .pipe(gulp.dest('dist'))
});
gulp.task('images', function(){
  return gulp.src('app./images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});
gulp.task('clean:dist', function(){
  return del.sync('dist');
})
gulp.task('cache:clear', function(){
  return cache.clearAll(callback)
});
//for php server
/* gulp.task('php', function() {
    php.server({ base: 'app/site', port: 8010, keepalive: true});
});
gulp.task('browserSync',['php'], function() {
    browserSync.init({
      proxy: '127.0.0.1:8010',
      port: 8080,
      open: true,
      notify: false
    });
}); */
//for regular server
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
});
// gulp watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/**/*.+(html|php)', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('build', function(callback){
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});
gulp.task('default', function (callback){
  runSequence(['sass', 'browserSync', 'watch'],
  callback
  )
});

GIT

cd to project Folder

git init
git status

create .gitignore file:
*.log
app/site/images/ //or applicable
dist/            //or applicable
node_modules/
package.json
.htaccess
etc

git add .gitignore
git status
git add -A
git status
