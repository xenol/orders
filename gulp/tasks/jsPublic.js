// JS tasks for public
// --------------------------------------
var config      = require('../config'),
	gulp        = require('gulp'),
	babel       = require('gulp-babel'),
	changed     = require('gulp-changed'),
	connect     = require('gulp-connect'),
	sourcemaps  = require('gulp-sourcemaps'),
	task        = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.js )
			.pipe( connect.reload() )
			.pipe( sourcemaps.init() )
			.pipe( babel({ presets: ['es2015'] }))
			.pipe( sourcemaps.write() )
			.on('error', console.log)
			.pipe( gulp.dest( path.public.js ) )
	};

module.exports = task;