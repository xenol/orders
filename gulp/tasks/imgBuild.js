// Image processing for build
// --------------------------------------
var config   = require('../config'),
	gulp     = require('gulp'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	task     = () => {
		
		var path = config.path;
		
		return gulp.src(path.assets.img)
			.pipe( imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe( gulp.dest(path.build.img) );
	};

module.exports = task;