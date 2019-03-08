const util = require('util');
const del = require('del');
const DefaultRegistry = require('undertaker-registry');
const config = require('../config.js');

function MyRegistry() {
    DefaultRegistry.call(this);
    this.set('clean', (done) => {
        del(config.paths.dist.root).then((paths) => {
            console.log(paths);
            done();
        }).catch((error) => {
            console.log(error);
        });
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
