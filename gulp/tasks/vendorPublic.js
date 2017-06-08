// Vendor tasks for public
// --------------------------------------
var config   = require('../config'),
	changed  = require('gulp-changed'),
	connect  = require('gulp-connect'),
	filter   = require('gulp-filter'),
	gulp     = require('gulp'),
	less     = require('gulp-less'),
	prefixer = require('gulp-autoprefixer'),
	task     = () => {
		
		var path = config.path,
			lessFilter = filter('**/*.less', {restore: true});
		
		return gulp.src( path.assets.vendor )
			.pipe( connect.reload() )
			.pipe(changed(path.public.vendor, {hasChanged: changed.compareLastModifiedTime}))
			.pipe(lessFilter)
			.pipe(less({
				compress: false
			}))
			.pipe(prefixer())
			.pipe(lessFilter.restore)
			.on('error', console.log)
			.pipe( gulp.dest( path.public.vendor ) );
	};

module.exports = task;