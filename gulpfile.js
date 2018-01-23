var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var userref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
gulp.task('sassmin', function () {
    return gulp.src('sass/app.scss')
        .pipe(sass())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('minijs', function () {
    return gulp.src('js/custom.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minicss', function () {
    return gulp.src('dist/app.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browser-sync', 'sassmin'], function () {
    gulp.watch('sass/**/*.scss', ['sassmin']);
    gulp.watch('index.html', browserSync.reload());
    gulp.watch('js/**/*.js', ['minijs']);
});