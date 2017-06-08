// Fonts processing for build
// --------------------------------------
var config = require('../config'),
	gulp   = require('gulp'),
	task   = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.fonts )
			.pipe( gulp.dest(path.build.fonts) );
	};

module.exports = task;