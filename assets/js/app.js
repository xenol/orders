define([
	'angular',
	'angularRoute',
	'angularStorage',
	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index',
],  angular => {
	'use strict';

	return angular.module('app', [
		'app.controllers',
		'app.directives',
		'app.filters',
		'app.services',
		'ngRoute',
		'ngStorage'
	]);
});
