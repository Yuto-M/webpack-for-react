const gulp = require('gulp');
const clean = require('./clean.js');
const script = require('./script.js');
const ejs = require('./ejs.js');
const serve = require('./serve.js');
const watch = require('./watch.js');

gulp.registry(clean);
gulp.registry(script);
gulp.registry(ejs);
gulp.registry(serve);
gulp.registry(watch);

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'script',
        'ejs',
    ),
    gulp.parallel(
        'serve',
        'watch',
    )
));