define( () => {
	'use strict';
	
	let loaders = {
		
		paceInit: {
			selector: 'body.paced',
			module: 'ui/pace-init',
		},
	};
	
	for( let item in loaders ) {
		let elements = document.querySelectorAll( loaders[item].selector );
		
		if( elements.length ) {
			( selector => { require( [loaders[item].module], ( module ) => {
				
				module.init( selector );
				
			})})( loaders[item].selector );
		}
	}
});