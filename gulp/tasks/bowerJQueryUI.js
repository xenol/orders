// jQueryUI vendors processing
// --------------------------------------
var config = require('../config'),
	gulp   = require('gulp'),
	task   = () => {
		
		var jqueryUI = config.path.bower.jqueryUI;
		
		// Copy files to assets/vendor dir
		return gulp.src( jqueryUI.ui )
			.pipe( gulp.dest( jqueryUI.dest ) );
	};
	
module.exports = task;