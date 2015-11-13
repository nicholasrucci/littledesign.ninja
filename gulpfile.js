var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src('app/views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/'));
});

gulp.task('default', function() {

});
