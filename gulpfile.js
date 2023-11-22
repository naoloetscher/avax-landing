// Dependencies
const { src, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

// Functions
function moveContent(){
    return src('src/links/**','!src/links/styles/**')
    .pipe(dest('build/links'))
}

function compilescss(){
    return src('src/links/styles/*.{css, scss}')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('build/links/styles'))
}

function jsmin(){
    return src('src/links/javascript/*.js')
    .pipe(terser())
    .pipe(dest('build/links/javascript'))
}

function pagesmin(){
    return src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build/'))
}

// Default Gulp
exports.default = series(
    moveContent,
    compilescss,
    jsmin,
    pagesmin,
);