require.config({
	paths: {
		
		// Vendor paths
		// ------------------------------
		angular: [
			'//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min',
			'/bower_components/angular/angular'
		],
		angularRoute: [
			'//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-route.min',
			'/bower_components/angular-route/angular-route.min'
		],
		angularStorage: [
			'//cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.min',
			'/bower_components/ngstorage/ngStorage.min'
		],
		domReady: [
			'//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
			'/bower_components/domReady/domReady'
		],
		pace: [
			'//cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min',
			'/bower_components/PACE/pace.min'
		],
		pikaday: [
			'//cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.0/pikaday.min',
			'/bower_components/pikaday/pikaday'
		],
		tether: [
			'//cdnjs.cloudflare.com/ajax/libs/tether/1.0.3/js/tether.min',
			'/bower_components/tether/dist/js/tether.min'
		],
		tetherSelect: [
			'//cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/js/select.min',
			'/bower_components/tether-select/dist/js/select.min'
		],
		underscore: [
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
			'/bower_components/underscore/underscore'
		],
	},
	
	shim: {
		angular: {
			exports: 'angular'
		},
		
		angularRoute: {
			deps: ['angular']
		}
	},
	
	urlArgs: (id, url) => {
		
		// Don't cache for public jade task
		if( pageJson && pageJson.isPublic ) return "";
		
		let args = 'v=latest',
			match;
		
		if ( match = url.match(/(\d(\.\d)+)/g) ) {
			args = 'v=' + match[0];
		}
		
		return (url.indexOf('?') === -1 ? '?' : '&') + args;
	},
});

require([
	'require',
	'loader',
	'bootstrap',
], require => {
	'use strict';
});