// Font-Awesome vendors processing
// --------------------------------------
var concat = require('gulp-concat'),
	config = require('../config'),
	gulp   = require('gulp'),
	less   = require('gulp-less'),
	task   = () => {
		
		var fa = config.path.bower.fontAwesome,
			ver = JSON.parse(require('fs').readFileSync( fa.dir + '/.bower.json', 'utf8')).version;
		
		// Create font-awesome.css
		gulp.src([
			fa.components.variables,
			fa.components.mixins,
			fa.components.path,
			fa.components.core,
			fa.components.larger,
			fa.components.fixedWidth,
			fa.components.list,
			fa.components.borderedPulled,
			fa.components.animated,
			fa.components.rotatedFlipped,
			fa.components.stacked,
			fa.components.icons,
			fa.components.screenReader,
			fa.variables
		])
		.pipe( concat('font-awesome.less') )
		.pipe( less({
			paths: [ fa.dir + '/less/' ]
		}))
		.pipe( gulp.dest( fa.dest + ( ver ? '/'+ ver : '') + '/css') );
		
		// Copy font-awsome fonts
		return gulp.src(fa.fonts)
			.pipe( gulp.dest( fa.dest + ( ver ? '/'+ ver : '') + '/fonts') );
	};
	
module.exports = task;