// link task for build
// --------------------------------------
var config = require('../config'),
	exec   = require('gulp-exec'),
	gulp   = require('gulp'),
	task   = () => {
		
		var path = config.path,
			options = {
				dir: process.cwd() + path.build.dir.substring(1, path.build.dir.length),
				link: process.cwd() + path.build.link.substring(1, path.build.link.length),
			};
		
		return gulp.src( path.assets.dir )
			.pipe( exec("ln -sf <%= options.dir %> <%= options.link %>", options) );
	};

module.exports = task;