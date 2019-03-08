const util = require('util');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const prettify = require('gulp-html-prettify');
const removeEmptyLines = require('gulp-remove-empty-lines');
const DefaultRegistry = require('undertaker-registry');
const config = require('../config.js');

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('ejs', (done) => {
        gulp.src([
            `${config.paths.src.tpl}/**/*.ejs`,
            `!${config.paths.src.tpl}/**/_*.ejs`,
        ])
            .pipe(plumber({
                errorHandler: notify.onError('Error: <%= error.message %>'),
            }))
            .pipe(ejs({}, {}, { ext: '.html' }))
            .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
            .pipe(removeEmptyLines())
            .pipe(gulp.dest(config.paths.dist.root));
        done();
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
