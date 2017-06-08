// Jade tasks for public
// --------------------------------------
const config   = require('../config'),
	  gulp     = require('gulp'),
	  //changed  = require('gulp-changed'),
	  connect  = require('gulp-connect'),
	  jade     = require('gulp-jade'),
	  w3cjs    = require('gulp-w3cjs'),
	  yargs    = require('yargs').argv,
	  jadeTask = () => {
		
		var path = config.path,
			mask = yargs.mask ? './assets/jade/' + yargs.mask + '.jade' : path.assets.jade,
			maskPath = yargs.mask ? yargs.mask.split('/') : [],
			basedir = '.';
		
		maskPath.forEach( (item, i) => { if( i ) basedir += '/..'; } );
		
		return gulp.src( mask )
			//.pipe( changed( path.public.dir ) )
			.pipe( connect.reload() )
			.pipe( jade({
				basedir: process.cwd() + '/assets/jade',
				pretty: true,
				locals: {
					basedir: basedir,
					serverUrl: "",
					isPublic: true,
				},
			}))
			//.pipe( w3cjs() )
			.on( 'error', console.log )
			.pipe( gulp.dest( file => {
				var match = file.base.match(/\/jade\/([^$]+)$/i );
				return path.public.dir + (match !== null ? '/' + match[1] : '');
			}))
	};

module.exports = jadeTask;