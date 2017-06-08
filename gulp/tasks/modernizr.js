// Modernizr
// --------------------------------------
var config    = require('../config'),
	gulp      = require('gulp'),
	exec      = require('gulp-exec'),
	task      = () => {
		
		var path = config.path;
		
		return gulp.src('./modernizr-config.json')
			.pipe(exec('modernizr -c <%= file.path %> -d ' + path.assets.dir + '/js/utils'));
	};

module.exports = task;