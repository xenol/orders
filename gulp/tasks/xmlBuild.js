// Image processing for public
// --------------------------------------
var config  = require('../config'),
	gulp    = require('gulp'),
	task    = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.xml )
			.pipe( gulp.dest( path.public.xml ) );
	};

module.exports = task;