const util = require('util');
const DefaultRegistry = require('undertaker-registry');
const browserSync = require('browser-sync');
const bs = browserSync.create();

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('reload', (done) => {
        bs.reload();
        console.log('reload');
        done();
    });
    this.set('serve', function (done) {
        console.log('serve');
        bs.init({
            port: 3012,
            open: false,
            server: {
                baseDir: 'dist',
            },
            startPath: '/',
            ghostMode: false,
        });
        done();
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
