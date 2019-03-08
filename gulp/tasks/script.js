const util = require('util');
const DefaultRegistry = require('undertaker-registry');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");
const gulp = require('gulp');

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('script', (done) => {
        console.log('script');
        webpackStream(webpackConfig, webpack)
            .on('error', function (e) {
                this.emit('end');
            })
            .pipe(gulp.dest("dist"));
        done();
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
