var gulp          = require('gulp');
var jade          = require('gulp-jade');
var nodemon 			= require('gulp-nodemon');
var jshint 				= require('gulp-jshint');

gulp.task('jade', function() {
  gulp.src('app/views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/'));
});


gulp.task('lint', function () {
	gulp.src('./**/*.js')
		.pipe(jshint());
});

gulp.task('develop', function () {
	nodemon({
		script: 'server.js',
		ext: 'html js',
		ignore: [],
		tasks: ['lint']
	})
		.on('restart', function () {
			console.log('Server restarted!')
		})
});

gulp.task('default', ['develop'], function() {

});
