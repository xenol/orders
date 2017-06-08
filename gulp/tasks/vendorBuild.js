// Vendor tasks for build
// --------------------------------------
var combineMq = require('gulp-combine-mq'),
	config    = require('../config'),
	csso	  = require('gulp-csso'),
	filter    = require('gulp-filter'),
	gulp      = require('gulp'),
	less      = require('gulp-less'),
	prefixer  = require('gulp-autoprefixer'),
	uglify    = require('gulp-uglify'),
	task      = () => {
		
		var path = config.path,
			cssFilter  = filter('**/*.css', {restore: true}),
			jsFilter   = filter('**/*.js', {restore: true}),
			lessFilter = filter('**/*.less', {restore: true});
		
		return gulp.src( path.assets.vendor )
			.pipe(cssFilter)
			.pipe(prefixer())
			.pipe(combineMq())
			.pipe(csso())
			.pipe(cssFilter.restore)
			.pipe(lessFilter)
			.pipe(less({
				compress: false
			}))
			.pipe(prefixer())
			.pipe(combineMq())
			.pipe(csso())
			.pipe(lessFilter.restore)
			.pipe(jsFilter)
			.pipe(uglify())
			.pipe(jsFilter.restore)
			.pipe(gulp.dest( path.build.vendor ));
	};

module.exports = task;