define(['pace', 'plugins/loadVendorCSS'], ( pace ) => {
	
	// Starting pace progress bar utility
	// @see: http://github.hubspot.com/pace/docs/welcome/
	// -----------------------------------------
	let init = ( selector ) => {
		pace.start({
			document: false
		});
	
		loadVendorCSS('pace');
	};
	
	return { init: init }
});