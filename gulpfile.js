const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify =  require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function compilaSass(){
    return gulp.src('./source/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build'))
}       

function minificaJS(){
    return  gulp.src('./source/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build'))
}

function comprimeImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build'))
}

exports.sass = compilaSass;
exports.js = minificaJS;
exports.image = comprimeImg
