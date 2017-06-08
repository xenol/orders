define(['plugins/ajax'], () => {
	'use strict';
	
	// CSS Loading.
	// Loads one of the urls, which has a good http-status
	// (200) and has not been previously loaded
	// -----------------------------------------
	function loadCSS( urls, id, media = 'all' ) {
		
		return new Promise((resolve, reject) => {
			
			if( typeof urls != 'object' ) urls = [urls];
				
			(function next() {
				
				let url = urls.shift();
				
				if( url ) {
					ajax( url, 'HEAD' )
						.then( 
							result => {
								if( !document.querySelector('link[href="' + url + '"]') ) {
									
									let link = document.createElement("link");
									
									if( id ) link.id = id;
									
									link.type = "text/css";
									link.rel = "stylesheet";
									link.href = url;
									link.media = media;
									link.onload = () => { resolve(); };
									
									document.getElementsByTagName("head")[0].appendChild( link );
								}
								else {
									resolve();
								}
							},
							error => next()
						);
				}
			})();
		});
	}
	
	window.loadCSS = loadCSS;
});