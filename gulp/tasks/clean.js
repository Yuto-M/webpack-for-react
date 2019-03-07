const util = require('util');
const del = require('del');
const DefaultRegistry = require('undertaker-registry');

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('clean', (done) => {
        console.log('clean');
        del('./dist').then((paths) => {
            console.log(paths);
            done();
        }).catch((error) => {
            console.log(error);
        });
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
