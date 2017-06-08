// Copy bower_components to build dir 
// -------------------------------
var config = require('../config'),
	gulp   = require('gulp'),
	task   = () => {
			
		var path = config.path;
		
		return gulp.src( path.assets.json )
			.pipe( gulp.dest( path.build.json ) )
	}
	
module.exports = task;