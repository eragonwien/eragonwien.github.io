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

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'alt',
            index: 'index.html'
        },
        port: 4001,
        injectChanges: true,
    });
});

gulp.task('reload', function () {
    return gulp.src('alt/index.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minijs', function () {
    return gulp.src('alt/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minicss', function () {
    return gulp.src('alt/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('alt/**/*', ['reload']);
});
