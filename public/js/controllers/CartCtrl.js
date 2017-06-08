'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('CartCtrl', ['$scope', '$rootScope', '$route', '$routeParams', '$localStorage', '$location', '$filter', function ($scope, $rootScope, $route, $routeParams, $localStorage, $location, $filter) {
		$scope.$route = $route;
		$scope.$storage = $localStorage;
		$scope.routeParams = { "slug": $routeParams.slug, "id": $routeParams.id };

		var Cart = function () {
			function Cart() {
				_classCallCheck(this, Cart);
			}

			_createClass(Cart, null, [{
				key: 'inc',
				value: function inc() {
					var num = parseInt(Cart.num) || 1;
					Cart.num = num < 100 ? num + 1 : num;
				}
			}, {
				key: 'dec',
				value: function dec() {
					var num = parseInt(Cart.num) || 1;
					Cart.num = num > 1 ? num - 1 : num;
				}
			}, {
				key: 'save',
				value: function save() {
					//delete $scope.$storage.checkout;
					//delete $localStorage.checkout;

					if (!$scope.routeParams.id) return;
					if (_typeof($scope.$storage.products) !== 'object') $scope.$storage.products = {};
					if (_typeof($scope.$storage.checkout) !== 'object') $scope.$storage.checkout = {};

					var products = $scope.$storage.products,
					    info = Cart.info;

					products[$scope.routeParams.id] = Cart.info;
					products[$scope.routeParams.id].num = Cart.num;
					products[$scope.routeParams.id].routeParams = $scope.routeParams;
				}
			}, {
				key: 'del',
				value: function del() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

					var products = Cart.products;

					id = parseInt(id) || 0;
					if (products[id]) delete products[id];
				}
			}, {
				key: 'go',
				value: function go() {
					var slug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

					Cart.save();
					$location.url('/' + slug);
				}
			}, {
				key: 'date',
				value: function date(_date) {
					$scope.pikadayDate = _date;
				}
			}, {
				key: 'clear',
				value: function clear() {
					delete $scope.$storage.checkout;
					delete $localStorage.checkout;
					delete $scope.$storage.products;
					delete $localStorage.products;

					if (!$scope.$storage.checkout) $scope.$storage.checkout = { date: "", time: "09:00" };
					$scope.time = $scope.$storage.checkout.time;
				}
			}, {
				key: 'check404',
				value: function check404() {
					var type = Cart.type;

					switch (type) {
						case "thanks":
							if (!Cart.quantity) Cart.go('/');
							break;
					}
				}
			}, {
				key: 'info',
				get: function get() {
					return $scope.$parent && $scope.$parent.info ? $scope.$parent.info : {};
				}
			}, {
				key: 'products',
				get: function get() {
					return $scope.$storage && $scope.$storage.products ? $scope.$storage.products : {};
				}
			}, {
				key: 'checkout',
				get: function get() {
					return $scope.$storage && $scope.$storage.checkout ? $scope.$storage.checkout : {};
				}
			}, {
				key: 'type',
				get: function get() {
					return $scope.$route.current && $scope.$route.current.$$route && $scope.$route.current.$$route.type ? $scope.$route.current.$$route.type : "";
				}
			}, {
				key: 'price',
				get: function get() {
					var info = Cart.info;
					return info.data ? info.data.tarif : 0;
				}
			}, {
				key: 'num',
				get: function get() {
					var products = Cart.products;
					return $scope.num || products[$scope.routeParams.id] && products[$scope.routeParams.id].num || 1;
				},
				set: function set(val) {
					$scope.num = val;
				}
			}, {
				key: 'total',
				get: function get() {
					var products = Cart.products;
					return Object.values(products).reduce(function (sum, current) {
						return sum + current.num * current.data.tarif;
					}, 0);
				}
			}, {
				key: 'quantity',
				get: function get() {
					var products = Cart.products;
					return Object.keys(products).length;
				}
			}, {
				key: 'title',
				get: function get() {
					var title = [],
					    info = Cart.info,
					    type = Cart.type,
					    products = Cart.products,
					    checkout = Cart.checkout;

					switch (type) {
						case "checkout":
							{
								var quantity = Cart.quantity;

								if (quantity > 1) {
									title.push(info.name);
									title.push(quantity + " " + $filter('translate')($filter('inclination')("service", quantity)));
									title = title.join(", ");
								} else if (quantity) {
									title = Object.values(products)[0].name;
								} else {
									title = $filter('translate')('Ordering');
								}
								break;
							}

						case "thanks":
							{
								var _quantity = Cart.quantity;

								if (_quantity > 1) {
									title.push(info.name);
									title.push(_quantity + " " + $filter('translate')($filter('inclination')("service", _quantity)));
									title = title.join(", ");
								} else if (_quantity) {
									title = Object.values(products)[0].name;
								} else {
									title = $filter('translate')('Ordering');
								}

								if (checkout.time && checkout.date) title += " " + checkout.date + " " + $filter('translate')('in') + " " + checkout.time;
								break;
							}

						default:
							title = info.title;
					}

					return title;
				}
			}, {
				key: 'description',
				get: function get() {
					var description = "",
					    type = Cart.type;

					switch (type) {
						case "thanks":
							description = $filter('translate')('The order is processed. If necessary the dispatcher will contact you for clarification');
							break;

						default:
							description = "";
					}

					return description;
				}
			}]);

			return Cart;
		}();

		Cart.check404();

		$scope.inc = function () {
			Cart.inc();
		};

		$scope.dec = function () {
			Cart.dec();
		};

		$scope.add = function () {
			Cart.add();
		};

		$scope.total = function () {
			return Cart.total;
		};

		$scope.go = function () {
			var slug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			Cart.go(slug);
		};

		$scope.del = function () {
			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			Cart.del(id);
		};

		$scope.clear = function () {
			Cart.clear();
		};

		$scope.title = Cart.title;
		$scope.description = Cart.description;

		$scope.tetherSelectClass = "form-group form-group-lg block-Cart__form-group";

		$scope.changeDate = function (date) {
			$scope.$storage.checkout.date = date.replace(/\,[^$]+$/, '');
		};

		$scope.changeTime = function (time) {
			$scope.$storage.checkout.time = time;
		};

		$scope.num = Cart.num;
		$scope.price = Cart.price;

		$scope.products = Cart.products;
		$scope.quantity = function () {
			return Cart.quantity;
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0NhcnRDdHJsLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImNvbnRyb2xsZXJzIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRyb290U2NvcGUiLCIkcm91dGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYWxTdG9yYWdlIiwiJGxvY2F0aW9uIiwiJGZpbHRlciIsIiRzdG9yYWdlIiwicm91dGVQYXJhbXMiLCJzbHVnIiwiaWQiLCJDYXJ0IiwibnVtIiwicGFyc2VJbnQiLCJwcm9kdWN0cyIsImNoZWNrb3V0IiwiaW5mbyIsInNhdmUiLCJ1cmwiLCJkYXRlIiwicGlrYWRheURhdGUiLCJ0aW1lIiwidHlwZSIsInF1YW50aXR5IiwiZ28iLCIkcGFyZW50IiwiY3VycmVudCIsIiQkcm91dGUiLCJkYXRhIiwidGFyaWYiLCJ2YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJzdW0iLCJrZXlzIiwibGVuZ3RoIiwidGl0bGUiLCJwdXNoIiwibmFtZSIsImpvaW4iLCJkZXNjcmlwdGlvbiIsImNoZWNrNDA0IiwiaW5jIiwiZGVjIiwiYWRkIiwidG90YWwiLCJkZWwiLCJjbGVhciIsInRldGhlclNlbGVjdENsYXNzIiwiY2hhbmdlRGF0ZSIsInJlcGxhY2UiLCJjaGFuZ2VUaW1lIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQyxVQUFELENBQVAsRUFBcUIsdUJBQWU7QUFDbkM7O0FBRUFDLGFBQVlDLFVBQVosQ0FBdUIsVUFBdkIsRUFBbUMsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixRQUF6QixFQUFtQyxjQUFuQyxFQUFtRCxlQUFuRCxFQUFvRSxXQUFwRSxFQUFpRixTQUFqRixFQUE0RixVQUFFQyxNQUFGLEVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxZQUE5QixFQUE0Q0MsYUFBNUMsRUFBMkRDLFNBQTNELEVBQXNFQyxPQUF0RSxFQUFtRjtBQUNqTk4sU0FBT0UsTUFBUCxHQUFnQkEsTUFB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QUFDQSxHQUZEOztBQUlBbkQsU0FBT29ELFVBQVAsR0FBb0IsVUFBRS9CLElBQUYsRUFBWTtBQUMvQnJCLFVBQU9PLFFBQVAsQ0FBZ0JRLFFBQWhCLENBQXlCTSxJQUF6QixHQUFnQ0EsSUFBaEM7QUFDQSxHQUZEOztBQUlBckIsU0FBT1ksR0FBUCxHQUFhRCxLQUFLQyxHQUFsQjtBQUNBWixTQUFPcUQsS0FBUCxHQUFlMUMsS0FBSzBDLEtBQXBCOztBQUVBckQsU0FBT2MsUUFBUCxHQUFrQkgsS0FBS0csUUFBdkI7QUFDQWQsU0FBT3VCLFFBQVAsR0FBa0IsWUFBTTtBQUFFLFVBQU9aLEtBQUtZLFFBQVo7QUFBdUIsR0FBakQ7QUFDQSxFQXBPa0MsQ0FBbkM7QUFxT0EsQ0F4T0QiLCJmaWxlIjoiY29udHJvbGxlcnMvQ2FydEN0cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoWycuL21vZHVsZSddLCBjb250cm9sbGVycyA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGNvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ0NhcnRDdHJsJywgWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhbFN0b3JhZ2UnLCAnJGxvY2F0aW9uJywgJyRmaWx0ZXInLCAoICRzY29wZSwgJHJvb3RTY29wZSwgJHJvdXRlLCAkcm91dGVQYXJhbXMsICRsb2NhbFN0b3JhZ2UsICRsb2NhdGlvbiwgJGZpbHRlciApID0+IHtcblx0XHQkc2NvcGUuJHJvdXRlID0gJHJvdXRlO1xuXHRcdCRzY29wZS4kc3RvcmFnZSA9ICRsb2NhbFN0b3JhZ2U7XG5cdFx0JHNjb3BlLnJvdXRlUGFyYW1zID0geyBcInNsdWdcIjogJHJvdXRlUGFyYW1zLnNsdWcsIFwiaWRcIjogJHJvdXRlUGFyYW1zLmlkIH07XG5cdFx0XG5cdFx0Y2xhc3MgQ2FydCB7XG5cdFx0XHRjb25zdHJ1Y3RvcigpIHt9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBpbmMoKSB7XG5cdFx0XHRcdGxldCBudW0gPSBwYXJzZUludCggQ2FydC5udW0gKSB8fCAxO1xuXHRcdFx0XHRDYXJ0Lm51bSA9IG51bSA8IDEwMCA/IG51bSArIDEgOiBudW07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBkZWMoKSB7XG5cdFx0XHRcdGxldCBudW0gPSBwYXJzZUludCggQ2FydC5udW0gKSB8fCAxO1xuXHRcdFx0XHRDYXJ0Lm51bSA9IG51bSA+IDEgPyBudW0gLSAxIDogbnVtO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgc2F2ZSgpIHtcblx0XHRcdFx0Ly9kZWxldGUgJHNjb3BlLiRzdG9yYWdlLmNoZWNrb3V0O1xuXHRcdFx0XHQvL2RlbGV0ZSAkbG9jYWxTdG9yYWdlLmNoZWNrb3V0O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoICEkc2NvcGUucm91dGVQYXJhbXMuaWQgKSByZXR1cm47XG5cdFx0XHRcdGlmKCB0eXBlb2YgJHNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzICE9PSAnb2JqZWN0JyApICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0cyA9IHt9O1xuXHRcdFx0XHRpZiggdHlwZW9mICRzY29wZS4kc3RvcmFnZS5jaGVja291dCAhPT0gJ29iamVjdCcgKSAkc2NvcGUuJHN0b3JhZ2UuY2hlY2tvdXQgPSB7fTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBwcm9kdWN0cyA9ICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0cyxcblx0XHRcdFx0XHRpbmZvID0gQ2FydC5pbmZvO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRwcm9kdWN0c1sgJHNjb3BlLnJvdXRlUGFyYW1zLmlkIF0gICAgICAgICAgICAgPSBDYXJ0LmluZm87XG5cdFx0XHRcdHByb2R1Y3RzWyAkc2NvcGUucm91dGVQYXJhbXMuaWQgXS5udW0gICAgICAgICA9IENhcnQubnVtO1xuXHRcdFx0XHRwcm9kdWN0c1sgJHNjb3BlLnJvdXRlUGFyYW1zLmlkIF0ucm91dGVQYXJhbXMgPSAkc2NvcGUucm91dGVQYXJhbXM7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBkZWwoIGlkID0gMCApIHtcblx0XHRcdFx0bGV0IHByb2R1Y3RzID0gQ2FydC5wcm9kdWN0cztcblx0XHRcdFx0XG5cdFx0XHRcdGlkID0gcGFyc2VJbnQoIGlkICkgfHwgMDtcblx0XHRcdFx0aWYoIHByb2R1Y3RzWyBpZCBdICkgZGVsZXRlIHByb2R1Y3RzWyBpZCBdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZ28oIHNsdWcgPSBcIlwiICkge1xuXHRcdFx0XHRDYXJ0LnNhdmUoKTtcblx0XHRcdFx0JGxvY2F0aW9uLnVybCgnLycgKyBzbHVnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBpbmZvKCkge1xuXHRcdFx0XHRyZXR1cm4gJHNjb3BlLiRwYXJlbnQgJiYgJHNjb3BlLiRwYXJlbnQuaW5mbyA/ICRzY29wZS4kcGFyZW50LmluZm8gOiB7fTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBwcm9kdWN0cygpIHtcblx0XHRcdFx0cmV0dXJuICRzY29wZS4kc3RvcmFnZSAmJiAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMgPyAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMgOiB7fTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBjaGVja291dCgpIHtcblx0XHRcdFx0cmV0dXJuICRzY29wZS4kc3RvcmFnZSAmJiAkc2NvcGUuJHN0b3JhZ2UuY2hlY2tvdXQgPyAkc2NvcGUuJHN0b3JhZ2UuY2hlY2tvdXQgOiB7fTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCB0eXBlKCkge1xuXHRcdFx0XHRyZXR1cm4gJHNjb3BlLiRyb3V0ZS5jdXJyZW50ICYmICRzY29wZS4kcm91dGUuY3VycmVudC4kJHJvdXRlICYmICRzY29wZS4kcm91dGUuY3VycmVudC4kJHJvdXRlLnR5cGUgPyAkc2NvcGUuJHJvdXRlLmN1cnJlbnQuJCRyb3V0ZS50eXBlIDogXCJcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBwcmljZSgpIHtcblx0XHRcdFx0bGV0IGluZm8gPSBDYXJ0LmluZm87XG5cdFx0XHRcdHJldHVybiBpbmZvLmRhdGEgPyBpbmZvLmRhdGEudGFyaWYgOiAwO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZ2V0IG51bSgpIHtcblx0XHRcdFx0bGV0IHByb2R1Y3RzID0gQ2FydC5wcm9kdWN0cztcblx0XHRcdFx0cmV0dXJuICRzY29wZS5udW0gfHwgcHJvZHVjdHNbICRzY29wZS5yb3V0ZVBhcmFtcy5pZCBdICYmIHByb2R1Y3RzWyAkc2NvcGUucm91dGVQYXJhbXMuaWQgXS5udW0gfHwgMTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIHNldCBudW0oIHZhbCApIHtcblx0XHRcdFx0JHNjb3BlLm51bSA9IHZhbDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCB0b3RhbCgpIHtcblx0XHRcdFx0bGV0IHByb2R1Y3RzID0gQ2FydC5wcm9kdWN0cztcblx0XHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoIHByb2R1Y3RzICkucmVkdWNlKCAoc3VtLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VtICsgY3VycmVudC5udW0gKiBjdXJyZW50LmRhdGEudGFyaWY7XG5cdFx0XHRcdH0sIDApO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZ2V0IHF1YW50aXR5KCkge1xuXHRcdFx0XHRsZXQgcHJvZHVjdHMgPSBDYXJ0LnByb2R1Y3RzO1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoIHByb2R1Y3RzICkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZGF0ZSggZGF0ZSApIHtcblx0XHRcdFx0JHNjb3BlLnBpa2FkYXlEYXRlID0gZGF0ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCB0aXRsZSgpIHtcblx0XHRcdFx0bGV0IHRpdGxlID0gW10sXG5cdFx0XHRcdFx0aW5mbyA9IENhcnQuaW5mbyxcblx0XHRcdFx0XHR0eXBlID0gQ2FydC50eXBlLFxuXHRcdFx0XHRcdHByb2R1Y3RzID0gQ2FydC5wcm9kdWN0cyxcblx0XHRcdFx0XHRjaGVja291dCA9IENhcnQuY2hlY2tvdXQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRzd2l0Y2goIHR5cGUgKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImNoZWNrb3V0XCI6IHtcblx0XHRcdFx0XHRcdGxldCBxdWFudGl0eSA9IENhcnQucXVhbnRpdHk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKCBxdWFudGl0eSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlLnB1c2goIGluZm8ubmFtZSApO1xuXHRcdFx0XHRcdFx0XHR0aXRsZS5wdXNoKCBxdWFudGl0eSArIFwiIFwiICsgJGZpbHRlcigndHJhbnNsYXRlJykoICRmaWx0ZXIoJ2luY2xpbmF0aW9uJykoXCJzZXJ2aWNlXCIsIHF1YW50aXR5KSApICk7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gdGl0bGUuam9pbihcIiwgXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiggcXVhbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gT2JqZWN0LnZhbHVlcyggcHJvZHVjdHMgKVswXS5uYW1lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gJGZpbHRlcigndHJhbnNsYXRlJykoJ09yZGVyaW5nJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIFwidGhhbmtzXCI6IHtcblx0XHRcdFx0XHRcdGxldCBxdWFudGl0eSA9IENhcnQucXVhbnRpdHk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKCBxdWFudGl0eSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlLnB1c2goIGluZm8ubmFtZSApO1xuXHRcdFx0XHRcdFx0XHR0aXRsZS5wdXNoKCBxdWFudGl0eSArIFwiIFwiICsgJGZpbHRlcigndHJhbnNsYXRlJykoICRmaWx0ZXIoJ2luY2xpbmF0aW9uJykoXCJzZXJ2aWNlXCIsIHF1YW50aXR5KSApICk7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gdGl0bGUuam9pbihcIiwgXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiggcXVhbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gT2JqZWN0LnZhbHVlcyggcHJvZHVjdHMgKVswXS5uYW1lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlID0gJGZpbHRlcigndHJhbnNsYXRlJykoJ09yZGVyaW5nJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKCBjaGVja291dC50aW1lICYmIGNoZWNrb3V0LmRhdGUgKSB0aXRsZSArPSAgXCIgXCIgKyBjaGVja291dC5kYXRlICsgXCIgXCIgKyAkZmlsdGVyKCd0cmFuc2xhdGUnKSgnaW4nKSArIFwiIFwiICsgY2hlY2tvdXQudGltZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aXRsZSA9IGluZm8udGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBkZXNjcmlwdGlvbigpIHtcblx0XHRcdFx0bGV0IGRlc2NyaXB0aW9uID0gXCJcIixcblx0XHRcdFx0XHR0eXBlID0gQ2FydC50eXBlO1xuXHRcdFx0XHRcblx0XHRcdFx0c3dpdGNoKCB0eXBlICkge1xuXHRcdFx0XHRcdGNhc2UgXCJ0aGFua3NcIjpcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uID0gJGZpbHRlcigndHJhbnNsYXRlJykoJ1RoZSBvcmRlciBpcyBwcm9jZXNzZWQuIElmIG5lY2Vzc2FyeSB0aGUgZGlzcGF0Y2hlciB3aWxsIGNvbnRhY3QgeW91IGZvciBjbGFyaWZpY2F0aW9uJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbiA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBkZXNjcmlwdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGNsZWFyKCkge1xuXHRcdFx0XHRkZWxldGUgJHNjb3BlLiRzdG9yYWdlLmNoZWNrb3V0O1xuXHRcdFx0XHRkZWxldGUgJGxvY2FsU3RvcmFnZS5jaGVja291dDtcblx0XHRcdFx0ZGVsZXRlICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0cztcblx0XHRcdFx0ZGVsZXRlICRsb2NhbFN0b3JhZ2UucHJvZHVjdHM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiggISRzY29wZS4kc3RvcmFnZS5jaGVja291dCApICRzY29wZS4kc3RvcmFnZS5jaGVja291dCA9IHsgZGF0ZTogXCJcIiwgdGltZTogXCIwOTowMFwiIH07XG5cdFx0XHRcdCRzY29wZS50aW1lID0gJHNjb3BlLiRzdG9yYWdlLmNoZWNrb3V0LnRpbWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBjaGVjazQwNCgpIHtcblx0XHRcdFx0bGV0IHR5cGUgPSBDYXJ0LnR5cGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRzd2l0Y2goIHR5cGUgKSB7XG5cdFx0XHRcdFx0Y2FzZSBcInRoYW5rc1wiOlxuXHRcdFx0XHRcdFx0aWYoICFDYXJ0LnF1YW50aXR5ICkgQ2FydC5nbygnLycpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Q2FydC5jaGVjazQwNCgpO1xuXHRcdFxuXHRcdCRzY29wZS5pbmMgPSAoKSA9PiB7XG5cdFx0XHRDYXJ0LmluYygpO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLmRlYyA9ICgpID0+IHtcblx0XHRcdENhcnQuZGVjKCk7XG5cdFx0fTtcblx0XHRcblx0XHQkc2NvcGUuYWRkID0gKCkgPT4ge1xuXHRcdFx0Q2FydC5hZGQoKTtcblx0XHR9O1xuXHRcdFxuXHRcdCRzY29wZS50b3RhbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBDYXJ0LnRvdGFsO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLmdvID0gKCBzbHVnID0gXCJcIiApID0+IHtcblx0XHRcdENhcnQuZ28oIHNsdWcgKTtcblx0XHR9O1xuXHRcdFxuXHRcdCRzY29wZS5kZWwgPSAoIGlkID0gMCApID0+IHtcblx0XHRcdENhcnQuZGVsKCBpZCApO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLmNsZWFyID0gKCkgPT4ge1xuXHRcdFx0Q2FydC5jbGVhcigpO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLnRpdGxlID0gQ2FydC50aXRsZTtcblx0XHQkc2NvcGUuZGVzY3JpcHRpb24gPSBDYXJ0LmRlc2NyaXB0aW9uO1xuXHRcdFxuXHRcdCRzY29wZS50ZXRoZXJTZWxlY3RDbGFzcyA9IFwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLWxnIGJsb2NrLUNhcnRfX2Zvcm0tZ3JvdXBcIjtcblx0XHRcblx0XHQkc2NvcGUuY2hhbmdlRGF0ZSA9ICggZGF0ZSApID0+IHtcblx0XHRcdCRzY29wZS4kc3RvcmFnZS5jaGVja291dC5kYXRlID0gZGF0ZS5yZXBsYWNlKC9cXCxbXiRdKyQvLCAnJyk7XG5cdFx0fVxuXHRcdFxuXHRcdCRzY29wZS5jaGFuZ2VUaW1lID0gKCB0aW1lICkgPT4ge1xuXHRcdFx0JHNjb3BlLiRzdG9yYWdlLmNoZWNrb3V0LnRpbWUgPSB0aW1lO1xuXHRcdH1cblx0XHRcblx0XHQkc2NvcGUubnVtID0gQ2FydC5udW07XG5cdFx0JHNjb3BlLnByaWNlID0gQ2FydC5wcmljZTtcblx0XHRcblx0XHQkc2NvcGUucHJvZHVjdHMgPSBDYXJ0LnByb2R1Y3RzO1xuXHRcdCRzY29wZS5xdWFudGl0eSA9ICgpID0+IHsgcmV0dXJuIENhcnQucXVhbnRpdHk7IH1cblx0fV0pO1xufSk7XG4iXX0=
