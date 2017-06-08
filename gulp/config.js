// Version
// --------------------------------------
var ver = JSON.parse(require('fs').readFileSync('./package.json', 'utf8')).version;

var obj = {
	path: {
		assets: {
			dir:    './assets',
			fonts:  [ './assets/fonts/**/*.*', '!./assets/fonts/**/_*.*' ],
			img:    [ './assets/img/**/*.*', '!./assets/img/**/_*.*' ],
			jade:   [ './assets/jade/*.jade', './assets/jade/views/*.jade', '!./assets/jade/**/_*.*' ],
			js:     [ './assets/js/**/*.js', '!./assets/js/**/_*.*' ],
			json:   [ './assets/json/**/*.json', '!./assets/json/**/_*.*' ],
			less:   [ './assets/less/main.min.less' ],
			sass:   [ './assets/sass/main.less' ],
			vendor: [ './assets/bower_components/**/*.*', '!./assets/bower_components/**/_*.*' ],
			xml:    [ './assets/xml/**/*.*', '!./assets/xml/**/_*.*' ],
		},
		
		bower: {
			dir:  './bower_components',
			rrc:  './.bowerrc',
			json: './bower.json',
			dest: './assets/vendor',
			bootstrap: {
				dir:       './assets/bower_components/bootstrap',
				dest:      './assets/bower_components/bootstrap/dist',
				variables: './assets/less/variables/bootstrap.less',
				fonts:     './assets/bower_components/bootstrap/dist/fonts/*.*'
			},
		},
		
		build: {
			dir:    './build/' + ver,
			css:    './build/' + ver + '/css',
			fonts:  './build/' + ver + '/fonts',
			img:    './build/' + ver + '/img',
			js:     './build/' + ver + '/js',
			json:   './build/' + ver + '/json',
			vendor: './build/' + ver + '/bower_components',
			xml:    './build/' + ver + '/xml',
		},
		
		public: {
			dir:    './public',
			css:    './public/css',
			fonts:  './public/fonts',
			img:    './public/img',
			js:     './public/js',
			json:   './public/json',
			vendor: './public/bower_components',
			xml:    './public/xml',
		},
		
		watch: {
			fonts: './assets/fonts/**/*.*',
			img:   './assets/img/**/*.*',
			jade:  './assets/jade/**/*.jade',
			js:    './assets/js/**/*.js',
			json:  './assets/json/**/*.json',
			less:  './assets/less/**/*.less',
			vendor:'./assets/bower_components/**/*.*',
			xml:   './assets/xml/**/*.*',
		},
	},
	
	server: {
		host:       'localhost',
		port:       '9000',
		root:       __dirname + '/../',
		livereload: true,
	},
	
	rjsOptimize: {
		optimize: "none",
		useStrict: true,
		removeCombined: true,
		findNestedDependencies: true,
		paths: {
			angular: 'empty:',
			angularRoute: 'empty:',
			angularStorage: 'empty:',
			domReady: 'empty:',
			pace: 'empty:',
			pikaday: 'empty:',
			tether: 'empty:',
			tetherSelect: 'empty:',
			underscore: 'empty:',
		},
		exclude: [
			'angular',
			'angularRoute',
			'angularStorage',
			'domReady',
			'pace',
			'pikaday',
			'tether',
			'tetherSelect',
			'underscore',
		],
	},
};

// Bower Bootstrap paths
// ----------------------------------------------
var bootstrap = obj.path.bower.bootstrap;

bootstrap.vars = {
	variables: bootstrap.dir + '/less/variables.less',
	mixins:    bootstrap.dir + '/less/mixins.less'
};

bootstrap.reset = {
	normalize:  bootstrap.dir + '/less/normalize.less',
	print:      bootstrap.dir + '/less/print.less',
	glyphicons: bootstrap.dir + '/less/glyphicons.less'
};

bootstrap.core = {
	scaffolding: bootstrap.dir + '/less/scaffolding.less',
	type:        bootstrap.dir + '/less/type.less',
	code:        bootstrap.dir + '/less/code.less',
	grid:        bootstrap.dir + '/less/grid.less',
	tables:      bootstrap.dir + '/less/tables.less',
	forms:       bootstrap.dir + '/less/forms.less',
	buttons:     bootstrap.dir + '/less/buttons.less'
};

bootstrap.components = {
	componentAnimations: bootstrap.dir + '/less/component-animations.less',
	dropdowns:           bootstrap.dir + '/less/dropdowns.less',
	buttonGroups:        bootstrap.dir + '/less/button-groups.less',
	inputGroups:         bootstrap.dir + '/less/input-groups.less',
	navs:                bootstrap.dir + '/less/navs.less',
	navbar:              bootstrap.dir + '/less/navbar.less',
	breadcrumbs:         bootstrap.dir + '/less/breadcrumbs.less',
	pagination:          bootstrap.dir + '/less/pagination.less',
	pager:               bootstrap.dir + '/less/pager.less',
	labels:              bootstrap.dir + '/less/labels.less',
	badges:              bootstrap.dir + '/less/badges.less',
	jumbotron:           bootstrap.dir + '/less/jumbotron.less',
	thumbnails:          bootstrap.dir + '/less/thumbnails.less',
	alerts:              bootstrap.dir + '/less/alerts.less',
	progressBars:        bootstrap.dir + '/less/progress-bars.less',
	media:               bootstrap.dir + '/less/media.less',
	listGroup:           bootstrap.dir + '/less/list-group.less',
	panels:              bootstrap.dir + '/less/panels.less',
	responsiveEmbed:     bootstrap.dir + '/less/responsive-embed.less',
	wells:               bootstrap.dir + '/less/wells.less',
	close:               bootstrap.dir + '/less/close.less'
};

bootstrap.componentsJS = {
	modals:              bootstrap.dir + '/less/modals.less',
	tooltip:             bootstrap.dir + '/less/tooltip.less',
	popovers:            bootstrap.dir + '/less/popovers.less',
	carousel:            bootstrap.dir + '/less/carousel.less'
};

bootstrap.utility = {
	utilities:           bootstrap.dir + '/less/utilities.less',
	responsiveUtilities: bootstrap.dir + '/less/responsive-utilities.less'
};

bootstrap.js = {
	transition:          bootstrap.dir + '/js/transition.js',
	alert:               bootstrap.dir + '/js/alert.js',
	button:              bootstrap.dir + '/js/button.js',
	carousel:            bootstrap.dir + '/js/carousel.js',
	collapse:            bootstrap.dir + '/js/collapse.js',
	dropdown:            bootstrap.dir + '/js/dropdown.js',
	modal:               bootstrap.dir + '/js/modal.js',
	tooltip:             bootstrap.dir + '/js/tooltip.js',
	popover:             bootstrap.dir + '/js/popover.js',
	scrollspy:           bootstrap.dir + '/js/scrollspy.js',
	tab:                 bootstrap.dir + '/js/tab.js',
	affix:               bootstrap.dir + '/js/affix.js'
};

module.exports = obj;