// Clear tasks for build
// --------------------------------------
var config    = require('../config'),
	del       = require('del'),
	clearTask = () => {
		
		var path = config.path;
		
		return del(path.build.dir + '/../*');
	};

module.exports = clearTask;