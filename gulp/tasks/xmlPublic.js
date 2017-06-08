// Image processing for public
// --------------------------------------
var config  = require('../config'),
	connect = require('gulp-connect'),
	changed = require('gulp-changed'),
	gulp    = require('gulp'),
	task    = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.xml )
			.pipe( connect.reload() )
			.pipe( changed(path.public.xml, {hasChanged: changed.compareLastModifiedTime}) )
			.on('error', console.log)
			.pipe( gulp.dest(path.public.xml) );
	};

module.exports = task;