// Jade tasks for build
// --------------------------------------
var config   = require('../config'),
	gulp     = require('gulp'),
	jade     = require('gulp-jade'),
	rigger   = require('gulp-rigger'),
	jadeTask = () => {
		
		var path = config.path,
			mask = path.assets.jade,
			maskPath = [],
			basedir = '.';
			
		maskPath.forEach( (item, i) => { if( i ) basedir += '/..'; } );

		return gulp.src( mask )
			.pipe(jade({
				basedir: process.cwd() + '/assets/jade',
				pretty: true,
				locals: {
					basedir: basedir,
					version: JSON.parse(require('fs').readFileSync('./package.json', 'utf8')).version,
				},
			}))
			.pipe( gulp.dest(function(file){
				
				var match = file.base.match(/\/jade\/([^$]+)$/i );
				
				return path.build.dir + (match !== null ? '/' + match[1] : '');
			}));
	};

module.exports = jadeTask;