// Bump:minor task
// --------------------------------------
var bump     = require('gulp-bump'),
	gulp     = require('gulp'),
	bumpTask = () => {
		
		return gulp.src('./package.json')
			.pipe(bump({type:'minor'}))
			.pipe(gulp.dest('./'));
	};

module.exports = bumpTask;