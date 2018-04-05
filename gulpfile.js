'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
let gulpIf = require('gulp-if');
let del = require('del');
let runSequence = require('run-sequence');
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
            baseDir: '.',
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

gulp.task('clean:bundle', function () {
    return del.sync('javascripts/bundle.js');
});

gulp.task('reload', function () {
    return gulp.src('index.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minijs', function () {
    return gulp.src('javascripts/angular/*js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('javascripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:js', function () {
    runSequence('clean:bundle', 'minijs');
});



gulp.task('minicss', function () {
    return gulp.src('alt/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('./**/*.html', ['reload']);
    gulp.watch('javascripts/angular/*.js', ['build:js']);
});
