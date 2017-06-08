'use strict';

define(['require', 'css', 'plugins/loadCSS'], function (require, css) {

	// Loading vedor css by paths in 'utils/css'
	// -----------------------------------------
	function loadVendorCSS(vendor) {
		if (css[vendor] && css[vendor].length) {
			//let urls = _.clone(css[vendor]);
			var urls = JSON.parse(JSON.stringify(css[vendor]));

			urls.forEach(function (url, i) {
				// if relative path starts with name of vendor,
				// function toUrl returns the wrong way, which will
				// consist of a combination of ways for path of vendor
				// js and path of this css. Add a symbol '!' to the 
				// beginning of css path, and then generate a url 
				// delete this symbol
				urls[i] = require.toUrl(url.match(/^\w/) ? '!' + url : url).replace(/\/!/, '\/');
			});

			return loadCSS(urls, vendor + '-css');
		}
	}

	window.loadVendorCSS = loadVendorCSS;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbG9hZFZlbmRvckNTUy5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJyZXF1aXJlIiwiY3NzIiwibG9hZFZlbmRvckNTUyIsInZlbmRvciIsImxlbmd0aCIsInVybHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwidXJsIiwiaSIsInRvVXJsIiwibWF0Y2giLCJyZXBsYWNlIiwibG9hZENTUyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBTyxDQUNOLFNBRE0sRUFFTixLQUZNLEVBR04saUJBSE0sQ0FBUCxFQUlHLFVBQUVDLE9BQUYsRUFBV0MsR0FBWCxFQUFvQjs7QUFFdEI7QUFDQTtBQUNBLFVBQVNDLGFBQVQsQ0FBd0JDLE1BQXhCLEVBQWlDO0FBQ2hDLE1BQUlGLElBQUlFLE1BQUosS0FBZUYsSUFBSUUsTUFBSixFQUFZQyxNQUEvQixFQUF3QztBQUN2QztBQUNBLE9BQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0UsU0FBTCxDQUFnQlAsSUFBSUUsTUFBSixDQUFoQixDQUFaLENBQVg7O0FBRUFFLFFBQUtJLE9BQUwsQ0FBYyxVQUFFQyxHQUFGLEVBQU9DLENBQVAsRUFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU4sU0FBS00sQ0FBTCxJQUFVWCxRQUFRWSxLQUFSLENBQWVGLElBQUlHLEtBQUosQ0FBVSxLQUFWLElBQW1CLE1BQU1ILEdBQXpCLEdBQStCQSxHQUE5QyxFQUFvREksT0FBcEQsQ0FBNEQsS0FBNUQsRUFBa0UsSUFBbEUsQ0FBVjtBQUNBLElBUkQ7O0FBVUEsVUFBT0MsUUFBU1YsSUFBVCxFQUFlRixTQUFTLE1BQXhCLENBQVA7QUFDQTtBQUNEOztBQUVEYSxRQUFPZCxhQUFQLEdBQXVCQSxhQUF2QjtBQUNBLENBNUJEIiwiZmlsZSI6InBsdWdpbnMvbG9hZFZlbmRvckNTUy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXG5cdCdyZXF1aXJlJyxcblx0J2NzcycsXG5cdCdwbHVnaW5zL2xvYWRDU1MnXG5dLCAoIHJlcXVpcmUsIGNzcyApID0+IHtcblx0XG5cdC8vIExvYWRpbmcgdmVkb3IgY3NzIGJ5IHBhdGhzIGluICd1dGlscy9jc3MnXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGZ1bmN0aW9uIGxvYWRWZW5kb3JDU1MoIHZlbmRvciApIHtcblx0XHRpZiggY3NzW3ZlbmRvcl0gJiYgY3NzW3ZlbmRvcl0ubGVuZ3RoICkge1xuXHRcdFx0Ly9sZXQgdXJscyA9IF8uY2xvbmUoY3NzW3ZlbmRvcl0pO1xuXHRcdFx0bGV0IHVybHMgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggY3NzW3ZlbmRvcl0gKSApO1xuXHRcdFx0XG5cdFx0XHR1cmxzLmZvckVhY2goICggdXJsLCBpICkgPT4ge1xuXHRcdFx0XHQvLyBpZiByZWxhdGl2ZSBwYXRoIHN0YXJ0cyB3aXRoIG5hbWUgb2YgdmVuZG9yLFxuXHRcdFx0XHQvLyBmdW5jdGlvbiB0b1VybCByZXR1cm5zIHRoZSB3cm9uZyB3YXksIHdoaWNoIHdpbGxcblx0XHRcdFx0Ly8gY29uc2lzdCBvZiBhIGNvbWJpbmF0aW9uIG9mIHdheXMgZm9yIHBhdGggb2YgdmVuZG9yXG5cdFx0XHRcdC8vIGpzIGFuZCBwYXRoIG9mIHRoaXMgY3NzLiBBZGQgYSBzeW1ib2wgJyEnIHRvIHRoZSBcblx0XHRcdFx0Ly8gYmVnaW5uaW5nIG9mIGNzcyBwYXRoLCBhbmQgdGhlbiBnZW5lcmF0ZSBhIHVybCBcblx0XHRcdFx0Ly8gZGVsZXRlIHRoaXMgc3ltYm9sXG5cdFx0XHRcdHVybHNbaV0gPSByZXF1aXJlLnRvVXJsKCB1cmwubWF0Y2goL15cXHcvKSA/ICchJyArIHVybCA6IHVybCApLnJlcGxhY2UoL1xcLyEvLCdcXC8nKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gbG9hZENTUyggdXJscywgdmVuZG9yICsgJy1jc3MnICk7XG5cdFx0fVxuXHR9XG5cdFxuXHR3aW5kb3cubG9hZFZlbmRvckNTUyA9IGxvYWRWZW5kb3JDU1M7XG59KTsiXX0=
