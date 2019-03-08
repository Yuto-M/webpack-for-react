const gulp = require('gulp');
const clean = require('./clean.js');
const script = require('./script.js');
const serve = require('./serve.js');
const watch = require('./watch.js');

gulp.registry(clean);
gulp.registry(script);
gulp.registry(serve);
gulp.registry(watch);

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'script'
    ),
    gulp.parallel(
        'serve',
        'watch',
    )
));