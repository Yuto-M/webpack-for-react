const gulp = require('gulp');
const clean = require('./clean.js');
const script = require('./script.js');

gulp.registry(clean);
gulp.registry(script);

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'script'
    )
));