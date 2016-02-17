"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect'), 
	open = require('gulp-open'), 
	browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat');

var config = {
	port: 9009,
	url: 'http://localhost',
	paths: {
		mainJs: './src/js/main.js',
		js: './src/js/*.js',
		mainHtml: './src/index.html',
		dist: './src'
	}
}

//start a local development server
gulp.task('connect', function(){
	connect.server({
		root: ['src'],
		port: config.port,
		base: config.url,
		livereload: true
	});
});

//opens a file in a given server
gulp.task('open', ['connect'], function(){
	gulp.src(config.paths.mainHtml)
		.pipe(open({uri: config.url + ':' + config.port + '/'}));
});

gulp.task('js', function(){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('app.js'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['js', 'watch', 'open']);