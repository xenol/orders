// Bower vendors processing by default
// ignore: bootstrap
// @see bower.json
// --------------------------------------
var bower  = require('main-bower-files'),
	config = require('../config'),
	fs     = require('fs'),
	gulp   = require('gulp'),
	task   = () => {
			
		var path = config.path,
			groups = JSON.parse(fs.readFileSync('./bower.json', 'utf8')).group;
		
		for (group in groups) {
			
			if( fs.statSync(path.bower.dir + '/' + group).isDirectory() ) {
				
				var ver = JSON.parse(fs.readFileSync(path.bower.dir + '/' + group + '/.bower.json', 'utf8')).version;
				
				gulp.src( bower({
					includeDev: true,
					debugging: true,
					paths: {
						bowerDirectory: path.bower.dir,
						bowerrc: path.bower.rrc,
						bowerJson: path.bower.json
					},
					group: group,
					checkExistence: true
				}))
				.pipe( gulp.dest( path.bower.dest + '/' + group + ( ver ? '/'+ ver : '') ) );
			}
		}
	}
	
module.exports = task;