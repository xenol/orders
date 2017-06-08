// Fonts processing for public
// --------------------------------------
var config   = require('../config'),
	changed  = require('gulp-changed'),
	connect  = require('gulp-connect'),
	gulp     = require('gulp'),
	task     = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.fonts )
			.pipe( connect.reload() )
			.pipe( changed(path.public.fonts, {hasChanged: changed.compareLastModifiedTime}) )
			.on('error', console.log)
			.pipe( gulp.dest(path.public.fonts) );
	};

module.exports = task;