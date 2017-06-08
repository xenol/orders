define(['plugins/getXHR'], () => {
	/**
	 * AJAX universal method
	 **/
	function ajax( url, method = 'GET' ) {
		return new Promise( (resolve, reject) => {
			let xhr = getXHR();
			
			xhr.open( method, url, true );
			xhr.onload = () => {
				if (xhr.status == 200) {
					resolve( xhr.response );
				}
				else {
					let error = new Error( xhr.status );
					
					error.code = xhr.status;
					reject( error );
				}
			};
			xhr.onerror = function() {
				reject(new Error("Network Error"));
			};
	 
			xhr.send();
		});
	}
	
	window.ajax = ajax;
});