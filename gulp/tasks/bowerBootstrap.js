// Bootstrap vendors processing
// --------------------------------------
var concat   = require('gulp-concat'),
	config   = require('../config'),
	gulp     = require('gulp'),
	less     = require('gulp-less'),
	rename   = require('gulp-rename'),
	uglify   = require('gulp-uglify'),
	task     = () => {
		
		var bootstrap = config.path.bower.bootstrap;
		
		// Create bootsrap.css
		gulp.src([
			
			// variables & mixins
			//bootstrap.vars.variables,
			bootstrap.vars.mixins,
			
			// reset
			bootstrap.reset.normalize,
			bootstrap.reset.print,
			//bootstrap.reset.glyphicons,
			
			// core
			bootstrap.core.scaffolding,
			bootstrap.core.type,
			//bootstrap.core.code,
			//bootstrap.core.grid,
			//bootstrap.core.tables,
			bootstrap.core.forms,
			bootstrap.core.buttons,
			
			// components
			//bootstrap.components.componentAnimations,
			bootstrap.components.dropdowns,
			bootstrap.components.buttonGroups,
			bootstrap.components.inputGroups,
			bootstrap.components.navs,
			bootstrap.components.navbar,
			bootstrap.components.breadcrumbs,
			bootstrap.components.pagination,
			//bootstrap.components.pager,
			//bootstrap.components.labels,
			//bootstrap.components.badges,
			//bootstrap.components.jumbotron,
			//bootstrap.components.thumbnails,
			//bootstrap.components.alerts,
			//bootstrap.components.progressBars,
			//bootstrap.components.media,
			//bootstrap.components.listGroup,
			//bootstrap.components.panels,
			//bootstrap.components.responsiveEmbed,
			//bootstrap.components.wells,
			//bootstrap.components.close,
			
			// componentsJS
			//bootstrap.componentsJS.modals,
			//bootstrap.componentsJS.tooltip,
			//bootstrap.componentsJS.popovers,
			//bootstrap.componentsJS.carousel,
			
			// utility
			bootstrap.utility.utilities,
			bootstrap.utility.responsiveUtilities,
			
			// custom variables
			bootstrap.variables
		])
		.pipe( concat('bootstrap.less') )
		.pipe( less({
			paths: [ bootstrap.dir + '/less/' ]
		}))
		.pipe( gulp.dest( bootstrap.dest + '/css') );

		// Create bootsrap.js
		gulp.src([
			//bootstrap.js.transition,
			//bootstrap.js.alert,
			//bootstrap.js.button,
			//bootstrap.js.carousel,
			//bootstrap.js.collapse,
			//bootstrap.js.dropdown,
			//bootstrap.js.modal,
			//bootstrap.js.tooltip,
			//bootstrap.js.popover,
			//bootstrap.js.scrollspy,
			//bootstrap.js.tab,
			//bootstrap.js.affix
		])
		.pipe( concat('bootstrap.js') )
		.pipe( gulp.dest( bootstrap.dest + '/js') )
		.pipe( uglify() )
		.pipe( rename('bootstrap.min.js') )
		.pipe( gulp.dest( bootstrap.dest + '/js') )
		
		
		// Copy bootsrap fonts
		return gulp.src(bootstrap.fonts)
			.pipe( gulp.dest( bootstrap.dest + '/fonts') );
	};
	
module.exports = task;