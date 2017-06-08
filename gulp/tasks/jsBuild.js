// JS tasks for build
// --------------------------------------
var config      = require('../config'),
	gulp        = require('gulp'),
	babel       = require('gulp-babel'),
	rjsOptimize = require('gulp-requirejs-optimize'),
	uglify      = require('gulp-uglify'),
	task        = () => {
		
		var path = config.path;
		
		return gulp.src( path.assets.js )
			.pipe( rjsOptimize( (file) => {
				return config.rjsOptimize;
			}))
			.pipe( babel({presets: ['es2015']}))
			.pipe( uglify() )
			.pipe( gulp.dest( path.build.js ) );
	};

module.exports = task;