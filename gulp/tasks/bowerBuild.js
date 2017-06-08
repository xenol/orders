// Copy bower_components to build dir 
// -------------------------------
var config = require('../config'),
	gulp   = require('gulp'),
	task   = () => {
			
		var path = config.path;
		
		return gulp.src( path.assets.vendor )
			.pipe( gulp.dest( path.build.vendor ) )
	}
	
module.exports = task;