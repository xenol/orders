'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(['plugins/ajax'], function () {
	'use strict';

	// CSS Loading.
	// Loads one of the urls, which has a good http-status
	// (200) and has not been previously loaded
	// -----------------------------------------

	function loadCSS(urls, id) {
		var media = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';


		return new Promise(function (resolve, reject) {

			if ((typeof urls === 'undefined' ? 'undefined' : _typeof(urls)) != 'object') urls = [urls];

			(function next() {

				var url = urls.shift();

				if (url) {
					ajax(url, 'HEAD').then(function (result) {
						if (!document.querySelector('link[href="' + url + '"]')) {

							var link = document.createElement("link");

							if (id) link.id = id;

							link.type = "text/css";
							link.rel = "stylesheet";
							link.href = url;
							link.media = media;
							link.onload = function () {
								resolve();
							};

							document.getElementsByTagName("head")[0].appendChild(link);
						} else {
							resolve();
						}
					}, function (error) {
						return next();
					});
				}
			})();
		});
	}

	window.loadCSS = loadCSS;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbG9hZENTUy5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJsb2FkQ1NTIiwidXJscyIsImlkIiwibWVkaWEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5leHQiLCJ1cmwiLCJzaGlmdCIsImFqYXgiLCJ0aGVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwicmVsIiwiaHJlZiIsIm9ubG9hZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxFQUF5QixZQUFNO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQVNDLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxFQUF4QixFQUE0QztBQUFBLE1BQWhCQyxLQUFnQix1RUFBUixLQUFROzs7QUFFM0MsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCOztBQUV2QyxPQUFJLFFBQU9MLElBQVAseUNBQU9BLElBQVAsTUFBZSxRQUFuQixFQUE4QkEsT0FBTyxDQUFDQSxJQUFELENBQVA7O0FBRTlCLElBQUMsU0FBU00sSUFBVCxHQUFnQjs7QUFFaEIsUUFBSUMsTUFBTVAsS0FBS1EsS0FBTCxFQUFWOztBQUVBLFFBQUlELEdBQUosRUFBVTtBQUNURSxVQUFNRixHQUFOLEVBQVcsTUFBWCxFQUNFRyxJQURGLENBRUUsa0JBQVU7QUFDVCxVQUFJLENBQUNDLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQWdCTCxHQUFoQixHQUFzQixJQUE3QyxDQUFMLEVBQTBEOztBQUV6RCxXQUFJTSxPQUFPRixTQUFTRyxhQUFULENBQXVCLE1BQXZCLENBQVg7O0FBRUEsV0FBSWIsRUFBSixFQUFTWSxLQUFLWixFQUFMLEdBQVVBLEVBQVY7O0FBRVRZLFlBQUtFLElBQUwsR0FBWSxVQUFaO0FBQ0FGLFlBQUtHLEdBQUwsR0FBVyxZQUFYO0FBQ0FILFlBQUtJLElBQUwsR0FBWVYsR0FBWjtBQUNBTSxZQUFLWCxLQUFMLEdBQWFBLEtBQWI7QUFDQVcsWUFBS0ssTUFBTCxHQUFjLFlBQU07QUFBRWQ7QUFBWSxRQUFsQzs7QUFFQU8sZ0JBQVNRLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxXQUF6QyxDQUFzRFAsSUFBdEQ7QUFDQSxPQWJELE1BY0s7QUFDSlQ7QUFDQTtBQUNELE1BcEJILEVBcUJFO0FBQUEsYUFBU0UsTUFBVDtBQUFBLE1BckJGO0FBdUJBO0FBQ0QsSUE3QkQ7QUE4QkEsR0FsQ00sQ0FBUDtBQW1DQTs7QUFFRGUsUUFBT3RCLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0EsQ0EvQ0QiLCJmaWxlIjoicGx1Z2lucy9sb2FkQ1NTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFsncGx1Z2lucy9hamF4J10sICgpID0+IHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Ly8gQ1NTIExvYWRpbmcuXG5cdC8vIExvYWRzIG9uZSBvZiB0aGUgdXJscywgd2hpY2ggaGFzIGEgZ29vZCBodHRwLXN0YXR1c1xuXHQvLyAoMjAwKSBhbmQgaGFzIG5vdCBiZWVuIHByZXZpb3VzbHkgbG9hZGVkXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGZ1bmN0aW9uIGxvYWRDU1MoIHVybHMsIGlkLCBtZWRpYSA9ICdhbGwnICkge1xuXHRcdFxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcblx0XHRcdGlmKCB0eXBlb2YgdXJscyAhPSAnb2JqZWN0JyApIHVybHMgPSBbdXJsc107XG5cdFx0XHRcdFxuXHRcdFx0KGZ1bmN0aW9uIG5leHQoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgdXJsID0gdXJscy5zaGlmdCgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIHVybCApIHtcblx0XHRcdFx0XHRhamF4KCB1cmwsICdIRUFEJyApXG5cdFx0XHRcdFx0XHQudGhlbiggXG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYoICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWY9XCInICsgdXJsICsgJ1wiXScpICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggaWQgKSBsaW5rLmlkID0gaWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rLmhyZWYgPSB1cmw7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rLm1lZGlhID0gbWVkaWE7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IHsgcmVzb2x2ZSgpOyB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoIGxpbmsgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRlcnJvciA9PiBuZXh0KClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHdpbmRvdy5sb2FkQ1NTID0gbG9hZENTUztcbn0pOyJdfQ==
