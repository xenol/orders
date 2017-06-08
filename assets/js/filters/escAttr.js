define(['./module', 'underscore'], (filters, _) => {
	'use strict';
	
	return filters.filter('escAttr', [() => {
		return text => {
			return _.escape( String(text) );
		};
	}]);
});
