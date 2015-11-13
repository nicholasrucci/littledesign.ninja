(function(){
	'use strict';

	var gulp          	= require('gulp');
	var gulpLoadPlugins = require('gulp-load-plugins');
	var nodemon 				= require('gulp-nodemon');
	var jshint 					= require('gulp-jshint');
	var env 						= require('gulp-env');
	var plugins 				= gulpLoadPlugins();

	var PATH = {
		JS: ['./app/**/*.js', './public/**/*.js', './*.js']
	};


	env({
		vars: {
			PORT: 3000
		}
	});

	gulp.task('lint', function () {
		gulp.src(PATH.JS)
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
	});

	gulp.task('develop', function () {
		nodemon({
			script: 'server.js',
			ext: 'html js',
			ignore: [],
			tasks: ['lint']
		})
			.on('restart', function () {
				console.log('Server restarted!');
			});
	});
})();