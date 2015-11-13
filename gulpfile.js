(function(){
	'use strict';

	var gulp          	= require('gulp');
	var gulpLoadPlugins = require('gulp-load-plugins');
	var nodemon 				= require('gulp-nodemon');
	var jshint 					= require('gulp-jshint');
	var env 						= require('gulp-env');
	var jade          	= require('gulp-jade');
	var plugins 				= gulpLoadPlugins();

	var PATH = {
		JS: ['./app/**/*.js', './public/**/*.js', './*.js'],
		HTML: './public/html'
	};

	env({
		vars: {
			PORT: 3000
		}
	});

	gulp.task('jade', function() {
		return gulp.src('app/views/*.jade')
			.pipe(jade())
			.pipe(gulp.dest(PATH.HTML));
	});

	gulp.task('lint', function () {
		gulp.src(PATH.JS)
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
	});

	gulp.task('develop', function () {
		nodemon({
			script: 'server.js',
			ext: 'jade js',
			ignore: [],
			tasks: ['lint', 'jade']
		})
			.on('restart', function () {
				console.log('Server restarted!');
			});
	});

gulp.task('default', ['develop'], function() {});
})();
