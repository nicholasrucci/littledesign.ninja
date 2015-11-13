var gulp          = require('gulp');
var nodemon 			= require('gulp-nodemon');
var jshint 				= require('gulp-jshint');

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