define(['./module'], (services) => {
	'use strict';
	
	services.service('screenMode', ['$window', (window) => {
		let elem = document.createElement('div', { id: 'screen-mode', class: 'screen-mode'});
			
		elem.id = 'screen-mode';
		elem.className = 'screen-mode';
		document.body.appendChild( elem );
			
		return () => {
			return window.getComputedStyle( document.getElementById("screen-mode") ).content.replace(/\'|\"/g, "");
		};
	}]);
});
