const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const { dest, parallel, src, series, watch } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const uglify = require('gulp-uglify');

/**
 * Compile Sass to CSS, add older browsers support, and minify sources.
 */
function styles() {
  return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
}

/**
 * Compile JavaScript, add older browsers support, and minify sources.
 */
function scripts() {
  return src('./js/main.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./js'))
    .pipe(browserSync.stream());
}

/**
 * Initialize and reload the preview on change.
 */
function preview() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./scss/**/*.scss', styles);
  watch('./js/main.js', scripts);
  watch('./*.html').on('change', browserSync.reload);
}

exports.default = series(parallel(styles, scripts), preview);