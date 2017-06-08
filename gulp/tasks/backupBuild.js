// Backup 'build' directory
// --------------------------------------
var config     = require('../config'),
	gulp       = require('gulp'),
	zip        = require('gulp-zip'),
	backupTask = () => {
		
		var path = config.path;
		
		return gulp.src(path.build.dir + '/**/*.*')
			.pipe(zip('build.zip'))
			.pipe(gulp.dest(path.backup.dir));
	};

module.exports = backupTask;