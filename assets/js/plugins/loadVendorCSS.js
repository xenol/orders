define([
	'require',
	'css',
	'plugins/loadCSS'
], ( require, css ) => {
	
	// Loading vedor css by paths in 'utils/css'
	// -----------------------------------------
	function loadVendorCSS( vendor ) {
		if( css[vendor] && css[vendor].length ) {
			//let urls = _.clone(css[vendor]);
			let urls = JSON.parse( JSON.stringify( css[vendor] ) );
			
			urls.forEach( ( url, i ) => {
				// if relative path starts with name of vendor,
				// function toUrl returns the wrong way, which will
				// consist of a combination of ways for path of vendor
				// js and path of this css. Add a symbol '!' to the 
				// beginning of css path, and then generate a url 
				// delete this symbol
				urls[i] = require.toUrl( url.match(/^\w/) ? '!' + url : url ).replace(/\/!/,'\/');
			});
			
			return loadCSS( urls, vendor + '-css' );
		}
	}
	
	window.loadVendorCSS = loadVendorCSS;
});