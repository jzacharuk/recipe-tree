/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

gulp.task('test', () =>
  gulp.src('./*.js')
    .pipe(istanbul({ includeUntested: true }))
    .on('finish', () => {
      gulp.src('test/*.js')
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'text', 'text-summary'],
          reportOpts: { dir: './coverage' },
        }));
    })
);

gulp.task('default', () =>
    gulp.run('test')
);
