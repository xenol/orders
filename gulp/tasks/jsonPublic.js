// Copy bower_components to public dir 
// -------------------------------
var config  = require('../config'),
	connect = require('gulp-connect'),
	gulp    = require('gulp'),
	task    = () => {
			
		var path = config.path;
		
		return gulp.src( path.assets.json )
			.pipe( connect.reload() )
			.pipe( gulp.dest( path.public.json ) )
	}
	
module.exports = task;