// Image processing for public
// --------------------------------------
var config   = require('../config'),
	gulp     = require('gulp'),
	changed  = require('gulp-changed'),	
	connect  = require('gulp-connect'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	task     = () => {
		
		var path = config.path;
		
		return gulp.src(path.assets.img)
			.pipe( connect.reload() )
			.pipe( changed(path.public.img) )
			.pipe( imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.on('error', console.log)
			.pipe( gulp.dest(path.public.img) );
	};

module.exports = task;