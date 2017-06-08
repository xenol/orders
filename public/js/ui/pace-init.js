'use strict';

define(['pace', 'plugins/loadVendorCSS'], function (pace) {

	// Starting pace progress bar utility
	// @see: http://github.hubspot.com/pace/docs/welcome/
	// -----------------------------------------
	var init = function init(selector) {
		pace.start({
			document: false
		});

		loadVendorCSS('pace');
	};

	return { init: init };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3BhY2UtaW5pdC5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJwYWNlIiwiaW5pdCIsInNlbGVjdG9yIiwic3RhcnQiLCJkb2N1bWVudCIsImxvYWRWZW5kb3JDU1MiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU8sQ0FBQyxNQUFELEVBQVMsdUJBQVQsQ0FBUCxFQUEwQyxVQUFFQyxJQUFGLEVBQVk7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLEtBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFFQyxRQUFGLEVBQWdCO0FBQzFCRixPQUFLRyxLQUFMLENBQVc7QUFDVkMsYUFBVTtBQURBLEdBQVg7O0FBSUFDLGdCQUFjLE1BQWQ7QUFDQSxFQU5EOztBQVFBLFFBQU8sRUFBRUosTUFBTUEsSUFBUixFQUFQO0FBQ0EsQ0FkRCIsImZpbGUiOiJ1aS9wYWNlLWluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoWydwYWNlJywgJ3BsdWdpbnMvbG9hZFZlbmRvckNTUyddLCAoIHBhY2UgKSA9PiB7XG5cdFxuXHQvLyBTdGFydGluZyBwYWNlIHByb2dyZXNzIGJhciB1dGlsaXR5XG5cdC8vIEBzZWU6IGh0dHA6Ly9naXRodWIuaHVic3BvdC5jb20vcGFjZS9kb2NzL3dlbGNvbWUvXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGxldCBpbml0ID0gKCBzZWxlY3RvciApID0+IHtcblx0XHRwYWNlLnN0YXJ0KHtcblx0XHRcdGRvY3VtZW50OiBmYWxzZVxuXHRcdH0pO1xuXHRcblx0XHRsb2FkVmVuZG9yQ1NTKCdwYWNlJyk7XG5cdH07XG5cdFxuXHRyZXR1cm4geyBpbml0OiBpbml0IH1cbn0pOyJdfQ==
