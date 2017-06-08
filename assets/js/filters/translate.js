define(['./module'], filters => {
	'use strict';
	
	return filters.filter('translate', ['$http', '$rootScope', ($http, $rootScope) => {
		return text => {
			return $rootScope.translate[ String(text) ] ? $rootScope.translate[ String(text) ] : String(text);
		}
	}]);
});
