const util = require('util');
const DefaultRegistry = require('undertaker-registry');
const gulp = require('gulp');

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('watch', (done) => {
        gulp.watch('src', gulp.parallel(
            'script',
            'ejs',
            'scss',
        ));
        gulp.watch('dist', gulp.series('reload'));
        done();
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
