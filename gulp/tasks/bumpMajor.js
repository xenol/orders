// Bump:major task
// --------------------------------------
var bump     = require('gulp-bump'),
	gulp     = require('gulp'),
	bumpTask = () => {
		
		return gulp.src('./package.json')
			.pipe(bump({type:'major'}))
			.pipe(gulp.dest('./'));
	};

module.exports = bumpTask;