var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");

gulp.task('sass', function(){
  gulp.src('Homework_10_OOP/task3/scss/main.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
      browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"],
      cascade: false
    }))
    .pipe(gulp.dest('Homework_10_OOP/task3/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass-tooltip', function(){
  gulp.src('Homework_10_OOP/task3/scss/tooltip.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
      browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"],
      cascade: false
    }))
    .pipe(gulp.dest('Homework_10_OOP/task3/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser', 'sass-tooltip'], function(){
  gulp.watch('Homework_10_OOP/task3/scss/**/*.scss', ['sass', 'sass-tooltip']);
});

gulp.task('browser', function(){
  browserSync({
    server: {
      baseDir: 'Homework_10_OOP/task3'
    },
    notify: false
  });
});

gulp.task('default', ['watch']);

/*
npm install node-sass gulp-sass --save-dev
npm install --save-dev gulp-watch
npm install --save-dev gulp-rename
npm install browser-sync gulp --save-dev
npm install --save-dev gulp-plumber
npm install --save-dev gulp-autoprefixer
*/