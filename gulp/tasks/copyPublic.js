// Copy files to public dir 
// -------------------------------
var config = require('../config'),
	gulp   = require('gulp'),
	task   = () => {
			
		var path = config.path;
		
		return gulp.src(path.assets.vendor)
			.pipe( gulp.dest( path.public.dir ) )
	}
	
module.exports = task;