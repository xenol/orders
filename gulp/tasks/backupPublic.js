// Backup 'public' directory
// --------------------------------------
var config     = require('../config'),
	gulp       = require('gulp'),
	zip        = require('gulp-zip'),
	backupTask = () => {
		
		var path = config.path;
		
		return gulp.src(path.public.dir + '/**/*.*')
			.pipe(zip('public.zip'))
			.on('error', console.log)
			.pipe(gulp.dest(path.backup.dir));
	};

module.exports = backupTask;