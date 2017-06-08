// HTTP-Server tasks
// --------------------------------------
var config     = require('../config.js'),
	connect    = require('gulp-connect'),
	gulp       = require('gulp'),
	task       = () => {
	
		var server = config.server;
		
		return connect.server({
			host:       server.host,
			port:       server.port,
			root:       server.root,
			livereload: server.livereload,
			debug:      false
		});
	};

module.exports = task;