'use strict';

define(['plugins/getXHR'], function () {
	/**
  * AJAX universal method
  **/
	function ajax(url) {
		var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';

		return new Promise(function (resolve, reject) {
			var xhr = getXHR();

			xhr.open(method, url, true);
			xhr.onload = function () {
				if (xhr.status == 200) {
					resolve(xhr.response);
				} else {
					var error = new Error(xhr.status);

					error.code = xhr.status;
					reject(error);
				}
			};
			xhr.onerror = function () {
				reject(new Error("Network Error"));
			};

			xhr.send();
		});
	}

	window.ajax = ajax;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYWpheC5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJnZXRYSFIiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwiY29kZSIsIm9uZXJyb3IiLCJzZW5kIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUMsZ0JBQUQsQ0FBUCxFQUEyQixZQUFNO0FBQ2hDOzs7QUFHQSxVQUFTQyxJQUFULENBQWVDLEdBQWYsRUFBcUM7QUFBQSxNQUFqQkMsTUFBaUIsdUVBQVIsS0FBUTs7QUFDcEMsU0FBTyxJQUFJQyxPQUFKLENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3hDLE9BQUlDLE1BQU1DLFFBQVY7O0FBRUFELE9BQUlFLElBQUosQ0FBVU4sTUFBVixFQUFrQkQsR0FBbEIsRUFBdUIsSUFBdkI7QUFDQUssT0FBSUcsTUFBSixHQUFhLFlBQU07QUFDbEIsUUFBSUgsSUFBSUksTUFBSixJQUFjLEdBQWxCLEVBQXVCO0FBQ3RCTixhQUFTRSxJQUFJSyxRQUFiO0FBQ0EsS0FGRCxNQUdLO0FBQ0osU0FBSUMsUUFBUSxJQUFJQyxLQUFKLENBQVdQLElBQUlJLE1BQWYsQ0FBWjs7QUFFQUUsV0FBTUUsSUFBTixHQUFhUixJQUFJSSxNQUFqQjtBQUNBTCxZQUFRTyxLQUFSO0FBQ0E7QUFDRCxJQVZEO0FBV0FOLE9BQUlTLE9BQUosR0FBYyxZQUFXO0FBQ3hCVixXQUFPLElBQUlRLEtBQUosQ0FBVSxlQUFWLENBQVA7QUFDQSxJQUZEOztBQUlBUCxPQUFJVSxJQUFKO0FBQ0EsR0FwQk0sQ0FBUDtBQXFCQTs7QUFFREMsUUFBT2pCLElBQVAsR0FBY0EsSUFBZDtBQUNBLENBN0JEIiwiZmlsZSI6InBsdWdpbnMvYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbJ3BsdWdpbnMvZ2V0WEhSJ10sICgpID0+IHtcblx0LyoqXG5cdCAqIEFKQVggdW5pdmVyc2FsIG1ldGhvZFxuXHQgKiovXG5cdGZ1bmN0aW9uIGFqYXgoIHVybCwgbWV0aG9kID0gJ0dFVCcgKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgeGhyID0gZ2V0WEhSKCk7XG5cdFx0XHRcblx0XHRcdHhoci5vcGVuKCBtZXRob2QsIHVybCwgdHJ1ZSApO1xuXHRcdFx0eGhyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSggeGhyLnJlc3BvbnNlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKCB4aHIuc3RhdHVzICk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZXJyb3IuY29kZSA9IHhoci5zdGF0dXM7XG5cdFx0XHRcdFx0cmVqZWN0KCBlcnJvciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0eGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuXHRcdFx0fTtcblx0IFxuXHRcdFx0eGhyLnNlbmQoKTtcblx0XHR9KTtcblx0fVxuXHRcblx0d2luZG93LmFqYXggPSBhamF4O1xufSk7Il19
