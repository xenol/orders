define(['./module'], filters => {
	'use strict';

	return filters.filter('customCurrency', ['numberFilter', numberFilter =>  {
		function isNumeric(value) {
			return (!isNaN(parseFloat(value)) && isFinite(value));
		}
		
		return (inputNumber, currencySymbol, decimalSeparator, thousandsSeparator, decimalDigits, prefixWithSymbol) => {
			if ( isNumeric( inputNumber ) ) {
				
				// defaults
				currencySymbol     = (typeof currencySymbol === "undefined") ? "$" : currencySymbol;
				decimalSeparator   = (typeof decimalSeparator === "undefined") ? "." : decimalSeparator;
				thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "," : thousandsSeparator;
				decimalDigits      = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 2 : decimalDigits;
				prefixWithSymbol   = (typeof prefixWithSymbol === "undefined") ? true : prefixWithSymbol;
			
				if (decimalDigits < 0) decimalDigits = 0;
			
				// Format the input number through the number filter
				// The resulting number will have "," as a thousands separator
				// and "." as a decimal separator.
				let formattedNumber = numberFilter(inputNumber, decimalDigits);
			
				// Extract the integral and the decimal parts
				let numberParts = formattedNumber.split(".");
				
				// Replace the "," symbol in the integral part
				// with the specified thousands separator.
				numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);
				
				// Compose the final result
				let result = numberParts[0];
				
				if (numberParts.length == 2) {
					result += decimalSeparator + numberParts[1];
				}
			
				return (prefixWithSymbol ? currencySymbol + " " : "") + result + (prefixWithSymbol ? "" : " " + currencySymbol);
			}
		};
	}]);
});
