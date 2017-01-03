var gulp = require('gulp')

gulp.task('json', () => {
  return gulp.src(['./src/package.json']).pipe(gulp.dest('./dist'));
});

gulp.task('mainjs', () => {
  return gulp.src(['./src/main.js']).pipe(gulp.dest('./dist'));
});

gulp.task('build', ['json', 'mainjs']);
