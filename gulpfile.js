/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () =>
    gulp.src('test/test.js', { read: false })
        .pipe(mocha())
);
