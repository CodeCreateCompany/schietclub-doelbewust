var gulp = require('gulp'),
    concat = require('gulp-concat'),

    tsc = require('gulp-typescript'),
    mocha = require('gulp-mocha'),
    jsMinify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),

    scssLint = require('gulp-scss-lint'),
    sass = require('gulp-sass'),
    cssPrefixer = require('gulp-autoprefixer'),
    cssMinify = require('gulp-cssnano'),

    del = require('del'),
    merge = require('merge-stream'),
    SystemBuilder = require('systemjs-builder');

var browserSync = require('browser-sync').create();

gulp.task('serve', ['html'], function() {


    browserSync.init({
        server: 'dist/'
    });

    gulp.watch('src/**/*.html', [ 'watch-html' ]);
    gulp.watch('src/app/**/*.html', [ 'watch-html' ]);
    gulp.watch('src/app/**/**.ts', [ 'watch-typescript' ]);
    gulp.watch('src/scss/**/*.scss', [ 'watch-scss']);
    gulp.watch('src/fonts/*.ttf', [ 'watch-fonts' ]);
    gulp.watch('src/images/**/*.*', [ 'watch-images' ]);
});

gulp.task('watch-html', ['html'], function() {
    browserSync.reload();
});
gulp.task('watch-typescript', ['system-build'], function() {
    browserSync.reload();
});
gulp.task('watch-scss', ['lintScss', 'scss'], function() {
    browserSync.reload();
});
gulp.task('watch-fonts', ['fonts'], function() {
    browserSync.reload();
});
gulp.task('watch-images', ['images'], function() {
    browserSync.reload();
});

gulp.task('clean', () => {
    return del('dist');
});

gulp.task('shims', () => {
    return gulp.src([
            'node_modules/core-js/client/shim.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'src/**/*.js'
        ])
        .pipe(concat('shims.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('system-build', [ 'tsc' ], () => {
    var builder = new SystemBuilder();

    return builder.loadConfig('system.config.js')
        .then(() => builder.buildStatic('app', 'dist/bundle.js'));
});

gulp.task('tsc', () => {
    var tsProject = tsc.createProject('tsconfig.json'),
        tsResult = tsProject.src()
            .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(gulp.dest('build'));
});

gulp.task('html', () => {
    return gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', () => {
    return gulp.src('src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('lintScss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(scssLint({ config: 'lint.yml' }));
});



gulp.task('scss', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({
            precision: 10,
            includePaths: 'node_modules/node-normalize-scss'
        }))
        .pipe(concat('styles.css'))
        .pipe(cssPrefixer())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('javascripts', function() {
    return gulp.src('src/javascripts/**/*.js')
        .pipe(gulp.dest('dist/js/'));
})

gulp.task('test-tsc', () => {
    var tsProject = tsc.createProject('tsconfig.json');

    return tsProject.src()
        .pipe(tsc(tsProject))
        .pipe(gulp.dest('test/js/'));
});

gulp.task('test-run', [ 'test-tsc' ], () => {
    return gulp.src('test/**/*.spec.js')
        .pipe(mocha());
});

gulp.task('test', [ 'test-run' ], () => {
    return del('test/js');
});

gulp.task('minify', () => {
    var js = gulp.src('dist/js/bundle.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('dist/js/'));

    var otherjs = gulp.src('dist/js/*.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('dist/js/'));

    var css = gulp.src('dist/css/styles.css')
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/css/'));

    return merge(js, css);
});



gulp.task('watchtests', () => {
    var watchTs = gulp.watch('src/app/**/**.ts', [ 'test-run' ]),
        watchTests = gulp.watch('test/**/*.spec.js', [ 'test-run' ]),

        onChanged = function(event) {
            console.log('File ' + event.path + ' was ' + event.type + '. Running tasks...');
        };

        watchTs.on('change', onChanged);
        watchTests.on('change', onChanged);
});

gulp.task('default', [
    'shims',
    'system-build',
    'html',
    'fonts',
    'images',
    'javascripts',
    'lintScss',
    'scss'
]);
