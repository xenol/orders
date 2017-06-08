// Less tasks for build
// --------------------------------------
const config   = require('../config'),
	  csso     = require('gulp-csso'),
	  gulp     = require('gulp'),
	  less     = require('gulp-less'),
	  prefixer = require('gulp-autoprefixer'),
	  lessTask  = () => {
			
		var path = config.path;
		
		return gulp.src( path.assets.less )
			.pipe(less({
				compress: false
			}))
			.pipe(prefixer())
			.pipe(csso())
			.pipe( gulp.dest( path.build.css ) );
	};

module.exports = lessTask;