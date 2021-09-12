'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

const noHkustPrefixFile = /(index|base|display)/

function compile() {
  return src('./src/*.scss') // 把src下的.scss文件进行独立build, 以支持按需引入时使用
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(rename(function (path) {
      if(!noHkustPrefixFile.test(path.basename)) {
        path.basename = `hkust-${path.basename}`
      }
    }))
    .pipe(dest('./lib'))
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
