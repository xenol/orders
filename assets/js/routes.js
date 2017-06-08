define(['./app'], app => {
	'use strict';
	
	return app.config(['$routeProvider', $routeProvider => {
		$routeProvider.when('/', {
			templateUrl: 'views/index.html',
			controller: 'MainCtrl',
		});
		
		$routeProvider.when('/cart', {
			templateUrl: 'views/cart.html',
			controller: 'CartCtrl',
			type: 'cart',
		});
		
		$routeProvider.when('/checkout', {
			templateUrl: 'views/checkout.html',
			controller: 'CartCtrl',
			type: 'checkout',
		});
		
		$routeProvider.when('/thanks', {
			templateUrl: 'views/thanks.html',
			controller: 'CartCtrl',
			type: 'thanks',
		});
		
		$routeProvider.when('/:slug', {
			templateUrl: 'views/category.html',
			controller: 'MainCtrl',
		});
		
		$routeProvider.when('/:slug/:id', {
			templateUrl: 'views/service.html',
			controller: 'MainCtrl',
		});
		
		$routeProvider.otherwise({
			redirectTo: '/',
		});
	}]);
});
