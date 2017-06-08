define(['./module'], filters => {
	'use strict';
	
	return filters.filter('inclination', [() => {
		return (text, variant) => {
			let res,
				tmp = String( variant )[ String(variant).length - 1 ];
			
			variant = parseInt( variant ) || 0;
			
			if( ("0,5,6,7,8,9".indexOf(tmp) + 1) || (variant >= 10 && variant <= 20) ) res = "services_1";
			else if( tmp == "1" ) res = "services_2";
			else res = "services";
			
			return res;
		}
	}]);
});
