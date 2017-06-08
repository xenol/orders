// Less tasks for public
// --------------------------------------
const config   = require('../config'),
	  gulp     = require('gulp'),
	  connect  = require('gulp-connect'),
	  less     = require('gulp-less'),
	  prefixer = require('gulp-autoprefixer'),
	  lessTask = () => {
			
		const path = config.path;
		
		return gulp.src( path.assets.less )
			.pipe( connect.reload() )
			.pipe( less({
				compress: false
			}))
			.pipe( prefixer() )
			.on( 'error', console.log )
			.pipe( gulp.dest( path.public.css ) );
	  };

module.exports = lessTask;