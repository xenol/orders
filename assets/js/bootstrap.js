define([
	'require',
	'angular',
	'app',
	'routes'
], (require, ng) => {
	'use strict';
	
	let app = require('app');
	
	app.run( ( $rootScope, $http, $templateCache ) => {
		$http.get('./json/repair.json', {cache: $templateCache}).then( 
			response => {
				if( !response.data || !Object.keys(response.data).length ) response.data = {};
				
				$rootScope.info = response.data;
			},
			response => {
				$rootScope.info = {};
			}
		);
		
		$http.get('./json/ru-RU.json', {cache: $templateCache}).then( 
			response => {
				$rootScope.translate = response.data;
			},
			response => {
				$rootScope.translate = {};
			}
		);
	});
	
	require(['plugins/domReady!'], document => {
		ng.bootstrap(document, ['app']);
	});
});