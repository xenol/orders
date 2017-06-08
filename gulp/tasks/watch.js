// Watch tasks
// --------------------------------------
var config  = require('../config'),
	connect = require('gulp-connect'),
	gulp    = require('gulp'),
	task    = () => {
	
		var path = config.path;
		
		// watch for fonts
		// gulp.watch( path.watch.fonts, ['fontsPublic']);
		
		// watch for img
		gulp.watch( path.watch.img, ['imgPublic']);
		
		// watch for jade
		gulp.watch( path.watch.jade, ["jadePublicAll"]);
		
		// watch for js
		gulp.watch( path.watch.js, ["jsPublic"]);
		
		// watch for json
		gulp.watch( path.watch.json, ["jsonPublic"]);
		
		// watch for less
		gulp.watch( path.watch.less, ['lessPublic']);
		
		// watch for vendors
		gulp.watch( path.watch.vendor, ['bowerPublic']);
		
		// watch for xml
		// gulp.watch( path.watch.xml, ['xmlPublic']);
	};

module.exports = task;