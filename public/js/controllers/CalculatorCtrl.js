'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('CalculatorCtrl', ['$scope', '$rootScope', '$routeParams', '$localStorage', '$location', function ($scope, $rootScope, $routeParams, $localStorage, $location) {
		$scope.$storage = $localStorage;
		$scope.parentSlug = $routeParams.slug;
		$scope.id = $routeParams.id;

		var Calculator = function () {
			function Calculator() {
				_classCallCheck(this, Calculator);
			}

			_createClass(Calculator, null, [{
				key: 'inc',
				value: function inc() {
					var num = parseInt($scope.num) || 1;
					$scope.num = num < 100 ? num + 1 : num;
				}
			}, {
				key: 'dec',
				value: function dec() {
					var num = parseInt($scope.num) || 1;
					$scope.num = num > 1 ? num - 1 : num;
				}
			}, {
				key: 'save',
				value: function save() {
					if (_typeof($scope.$storage.products) !== 'object') $scope.$storage.products = {};
					//if( !$scope.$storage.products[$scope.$parent.info.id] ) $scope.$storage.products[$scope.$parent.info.id] = {};
					//delete $scope.$storage.products;
					//let product = $scope.$storage.products[$scope.$parent.info.id];

					//console.log( $scope.$parent.info );
					//console.log( $scope.num );
					//console.log( $scope.parentSlug );

					$scope.$storage.products[$scope.$parent.info.id] = $scope.$parent.info;
					$scope.$storage.products[$scope.$parent.info.id].num = $scope.num;
					$scope.$storage.products[$scope.$parent.info.id].parentSlug = $scope.parentSlug;
					$scope.$storage.products[$scope.$parent.info.id].time = $scope.time;
				}
			}, {
				key: 'add',
				value: function add() {
					Calculator.save();
					$location.url('/cart');
				}
			}, {
				key: 'del',
				value: function del() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

					id = parseInt(id) || 0;
					if ($scope.$parent.info.products[id]) delete $scope.$parent.info.products[id];
				}
			}, {
				key: 'checkout',
				value: function checkout() {
					$location.url('/checkout');
				}
			}, {
				key: 'thanks',
				value: function thanks() {
					$location.url('/thanks');
				}
			}, {
				key: 'changeTime',
				value: function changeTime() {
					//Calculator.save();
					//console.log($scope.time);
				}
			}, {
				key: 'price',
				get: function get() {
					return $scope && $scope.$parent && $scope.$parent.info && $scope.$parent.info.data ? $scope.$parent.info.data.tarif : 0;
				}
			}, {
				key: 'num',
				get: function get() {
					return $scope.$storage && $scope.$storage.products && $scope.$storage.products[$scope.id] ? $scope.$storage.products[$scope.id].num : 1;
				}
			}, {
				key: 'total',
				get: function get() {
					var res = 0;

					if (_typeof($scope.$parent.info.products) === "object") {
						res = Object.values($scope.$parent.info.products).reduce(function (sum, current) {
							return sum + current.num * current.data.tarif;
						}, 0);
					};

					return res;
				}
			}, {
				key: 'length',
				get: function get() {
					return _typeof($scope.$storage.products) === 'object' ? Object.keys($scope.$storage.products).length : 0;
				}
			}, {
				key: 'title',
				get: function get() {
					return 1;
				}
			}]);

			return Calculator;
		}();

		$scope.inc = function () {
			Calculator.inc();
		};

		$scope.dec = function () {
			Calculator.dec();
		};

		$scope.add = function () {
			Calculator.add();
		};

		$scope.total = function () {
			return Calculator.total;
		};

		$scope.checkout = function () {
			Calculator.checkout();
		};

		$scope.thanks = function () {
			Calculator.thanks();
		};

		$scope.changeTime = function () {
			Calculator.changeTime();
		};

		$scope.title = function () {
			return Calculator.title;
		};

		$scope.time = "09-00";
		$scope.tetherSelectClass = "form-group form-group-lg block-calculator__form-group";

		$scope.num = Calculator.num;
		$scope.price = Calculator.price;
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0NhbGN1bGF0b3JDdHJsLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImNvbnRyb2xsZXJzIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRyb290U2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYWxTdG9yYWdlIiwiJGxvY2F0aW9uIiwiJHN0b3JhZ2UiLCJwYXJlbnRTbHVnIiwic2x1ZyIsImlkIiwiQ2FsY3VsYXRvciIsIm51bSIsInBhcnNlSW50IiwicHJvZHVjdHMiLCIkcGFyZW50IiwiaW5mbyIsInRpbWUiLCJzYXZlIiwidXJsIiwiZGF0YSIsInRhcmlmIiwicmVzIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwic3VtIiwiY3VycmVudCIsImtleXMiLCJsZW5ndGgiLCJpbmMiLCJkZWMiLCJhZGQiLCJ0b3RhbCIsImNoZWNrb3V0IiwidGhhbmtzIiwiY2hhbmdlVGltZSIsInRpdGxlIiwidGV0aGVyU2VsZWN0Q2xhc3MiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxFQUFxQix1QkFBZTtBQUNuQzs7QUFFQUMsYUFBWUMsVUFBWixDQUF1QixnQkFBdkIsRUFBeUMsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixjQUF6QixFQUF5QyxlQUF6QyxFQUEwRCxXQUExRCxFQUF1RSxVQUFFQyxNQUFGLEVBQVVDLFVBQVYsRUFBc0JDLFlBQXRCLEVBQW9DQyxhQUFwQyxFQUFtREMsU0FBbkQsRUFBa0U7QUFDakxKLFNBQU9LLFFBQVAsR0FBa0JGLGFBQWxCO0FBQ0FILFNBQU9NLFVBQVAsR0FBb0JKLGFBQWFLLElBQWpDO0FBQ0FQLFNBQU9RLEVBQVAsR0FBWU4sYUFBYU0sRUFBekI7O0FBSGlMLE1BSzNLQyxVQUwySztBQU1oTCx5QkFBYztBQUFBO0FBQUU7O0FBTmdLO0FBQUE7QUFBQSwwQkFRbks7QUFDWixTQUFJQyxNQUFNQyxTQUFVWCxPQUFPVSxHQUFqQixLQUEwQixDQUFwQztBQUNBVixZQUFPVSxHQUFQLEdBQWFBLE1BQU0sR0FBTixHQUFZQSxNQUFNLENBQWxCLEdBQXNCQSxHQUFuQztBQUNBO0FBWCtLO0FBQUE7QUFBQSwwQkFhbks7QUFDWixTQUFJQSxNQUFNQyxTQUFVWCxPQUFPVSxHQUFqQixLQUEwQixDQUFwQztBQUNBVixZQUFPVSxHQUFQLEdBQWFBLE1BQU0sQ0FBTixHQUFVQSxNQUFNLENBQWhCLEdBQW9CQSxHQUFqQztBQUNBO0FBaEIrSztBQUFBO0FBQUEsMkJBa0JsSztBQUNiLFNBQUksUUFBT1YsT0FBT0ssUUFBUCxDQUFnQk8sUUFBdkIsTUFBb0MsUUFBeEMsRUFBbURaLE9BQU9LLFFBQVAsQ0FBZ0JPLFFBQWhCLEdBQTJCLEVBQTNCO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFaLFlBQU9LLFFBQVAsQ0FBZ0JPLFFBQWhCLENBQXlCWixPQUFPYSxPQUFQLENBQWVDLElBQWYsQ0FBb0JOLEVBQTdDLElBQW1EUixPQUFPYSxPQUFQLENBQWVDLElBQWxFO0FBQ0FkLFlBQU9LLFFBQVAsQ0FBZ0JPLFFBQWhCLENBQXlCWixPQUFPYSxPQUFQLENBQWVDLElBQWYsQ0FBb0JOLEVBQTdDLEVBQWlERSxHQUFqRCxHQUF1RFYsT0FBT1UsR0FBOUQ7QUFDQVYsWUFBT0ssUUFBUCxDQUFnQk8sUUFBaEIsQ0FBeUJaLE9BQU9hLE9BQVAsQ0FBZUMsSUFBZixDQUFvQk4sRUFBN0MsRUFBaURGLFVBQWpELEdBQThETixPQUFPTSxVQUFyRTtBQUNBTixZQUFPSyxRQUFQLENBQWdCTyxRQUFoQixDQUF5QlosT0FBT2EsT0FBUCxDQUFlQyxJQUFmLENBQW9CTixFQUE3QyxFQUFpRE8sSUFBakQsR0FBd0RmLE9BQU9lLElBQS9EO0FBQ0E7QUFoQytLO0FBQUE7QUFBQSwwQkFrQ25LO0FBQ1pOLGdCQUFXTyxJQUFYO0FBQ0FaLGVBQVVhLEdBQVYsQ0FBYyxPQUFkO0FBQ0E7QUFyQytLO0FBQUE7QUFBQSwwQkF1QzNKO0FBQUEsU0FBVFQsRUFBUyx1RUFBSixDQUFJOztBQUNwQkEsVUFBS0csU0FBVUgsRUFBVixLQUFrQixDQUF2QjtBQUNBLFNBQUlSLE9BQU9hLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkYsUUFBcEIsQ0FBOEJKLEVBQTlCLENBQUosRUFBeUMsT0FBT1IsT0FBT2EsT0FBUCxDQUFlQyxJQUFmLENBQW9CRixRQUFwQixDQUE4QkosRUFBOUIsQ0FBUDtBQUN6QztBQTFDK0s7QUFBQTtBQUFBLCtCQTRDOUo7QUFDakJKLGVBQVVhLEdBQVYsQ0FBYyxXQUFkO0FBQ0E7QUE5QytLO0FBQUE7QUFBQSw2QkFnRGhLO0FBQ2ZiLGVBQVVhLEdBQVYsQ0FBYyxTQUFkO0FBQ0E7QUFsRCtLO0FBQUE7QUFBQSxpQ0FvRDVKO0FBQ25CO0FBQ0E7QUFDQTtBQXZEK0s7QUFBQTtBQUFBLHdCQXlEN0o7QUFDbEIsWUFBT2pCLFVBQVVBLE9BQU9hLE9BQWpCLElBQTRCYixPQUFPYSxPQUFQLENBQWVDLElBQTNDLElBQW1EZCxPQUFPYSxPQUFQLENBQWVDLElBQWYsQ0FBb0JJLElBQXZFLEdBQThFbEIsT0FBT2EsT0FBUCxDQUFlQyxJQUFmLENBQW9CSSxJQUFwQixDQUF5QkMsS0FBdkcsR0FBK0csQ0FBdEg7QUFDQTtBQTNEK0s7QUFBQTtBQUFBLHdCQTZEL0o7QUFDaEIsWUFBT25CLE9BQU9LLFFBQVAsSUFBbUJMLE9BQU9LLFFBQVAsQ0FBZ0JPLFFBQW5DLElBQStDWixPQUFPSyxRQUFQLENBQWdCTyxRQUFoQixDQUEwQlosT0FBT1EsRUFBakMsQ0FBL0MsR0FBdUZSLE9BQU9LLFFBQVAsQ0FBZ0JPLFFBQWhCLENBQTBCWixPQUFPUSxFQUFqQyxFQUFzQ0UsR0FBN0gsR0FBbUksQ0FBMUk7QUFDQTtBQS9EK0s7QUFBQTtBQUFBLHdCQWlFN0o7QUFDbEIsU0FBSVUsTUFBTSxDQUFWOztBQUVBLFNBQUksUUFBT3BCLE9BQU9hLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkYsUUFBM0IsTUFBd0MsUUFBNUMsRUFBdUQ7QUFDdERRLFlBQU1DLE9BQU9DLE1BQVAsQ0FBZXRCLE9BQU9hLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkYsUUFBbkMsRUFBOENXLE1BQTlDLENBQXNELFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUM3RSxjQUFPRCxNQUFNQyxRQUFRZixHQUFSLEdBQWNlLFFBQVFQLElBQVIsQ0FBYUMsS0FBeEM7QUFDQSxPQUZLLEVBRUgsQ0FGRyxDQUFOO0FBR0E7O0FBRUQsWUFBT0MsR0FBUDtBQUNBO0FBM0UrSztBQUFBO0FBQUEsd0JBNkU1SjtBQUNuQixZQUFPLFFBQU9wQixPQUFPSyxRQUFQLENBQWdCTyxRQUF2QixNQUFvQyxRQUFwQyxHQUErQ1MsT0FBT0ssSUFBUCxDQUFhMUIsT0FBT0ssUUFBUCxDQUFnQk8sUUFBN0IsRUFBd0NlLE1BQXZGLEdBQWdHLENBQXZHO0FBQ0E7QUEvRStLO0FBQUE7QUFBQSx3QkFpRjdKO0FBQ2xCLFlBQU8sQ0FBUDtBQUNBO0FBbkYrSzs7QUFBQTtBQUFBOztBQXNGakwzQixTQUFPNEIsR0FBUCxHQUFhLFlBQU07QUFDbEJuQixjQUFXbUIsR0FBWDtBQUNBLEdBRkQ7O0FBSUE1QixTQUFPNkIsR0FBUCxHQUFhLFlBQU07QUFDbEJwQixjQUFXb0IsR0FBWDtBQUNBLEdBRkQ7O0FBSUE3QixTQUFPOEIsR0FBUCxHQUFhLFlBQU07QUFDbEJyQixjQUFXcUIsR0FBWDtBQUNBLEdBRkQ7O0FBSUE5QixTQUFPK0IsS0FBUCxHQUFlLFlBQU07QUFDcEIsVUFBT3RCLFdBQVdzQixLQUFsQjtBQUNBLEdBRkQ7O0FBSUEvQixTQUFPZ0MsUUFBUCxHQUFrQixZQUFNO0FBQ3ZCdkIsY0FBV3VCLFFBQVg7QUFDQSxHQUZEOztBQUlBaEMsU0FBT2lDLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQnhCLGNBQVd3QixNQUFYO0FBQ0EsR0FGRDs7QUFJQWpDLFNBQU9rQyxVQUFQLEdBQW9CLFlBQU07QUFDekJ6QixjQUFXeUIsVUFBWDtBQUNBLEdBRkQ7O0FBSUFsQyxTQUFPbUMsS0FBUCxHQUFlLFlBQU07QUFDcEIsVUFBTzFCLFdBQVcwQixLQUFsQjtBQUNBLEdBRkQ7O0FBSUFuQyxTQUFPZSxJQUFQLEdBQWMsT0FBZDtBQUNBZixTQUFPb0MsaUJBQVAsR0FBMkIsdURBQTNCOztBQUVBcEMsU0FBT1UsR0FBUCxHQUFhRCxXQUFXQyxHQUF4QjtBQUNBVixTQUFPcUMsS0FBUCxHQUFlNUIsV0FBVzRCLEtBQTFCO0FBQ0EsRUEzSHdDLENBQXpDO0FBNEhBLENBL0hEIiwiZmlsZSI6ImNvbnRyb2xsZXJzL0NhbGN1bGF0b3JDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFsnLi9tb2R1bGUnXSwgY29udHJvbGxlcnMgPT4ge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRjb250cm9sbGVycy5jb250cm9sbGVyKCdDYWxjdWxhdG9yQ3RybCcsIFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhbFN0b3JhZ2UnLCAnJGxvY2F0aW9uJywgKCAkc2NvcGUsICRyb290U2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2FsU3RvcmFnZSwgJGxvY2F0aW9uICkgPT4ge1xuXHRcdCRzY29wZS4kc3RvcmFnZSA9ICRsb2NhbFN0b3JhZ2U7XG5cdFx0JHNjb3BlLnBhcmVudFNsdWcgPSAkcm91dGVQYXJhbXMuc2x1Zztcblx0XHQkc2NvcGUuaWQgPSAkcm91dGVQYXJhbXMuaWQ7XG5cdFx0XG5cdFx0Y2xhc3MgQ2FsY3VsYXRvciB7XG5cdFx0XHRjb25zdHJ1Y3RvcigpIHt9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBpbmMoKSB7XG5cdFx0XHRcdGxldCBudW0gPSBwYXJzZUludCggJHNjb3BlLm51bSApIHx8IDE7XG5cdFx0XHRcdCRzY29wZS5udW0gPSBudW0gPCAxMDAgPyBudW0gKyAxIDogbnVtO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZGVjKCkge1xuXHRcdFx0XHRsZXQgbnVtID0gcGFyc2VJbnQoICRzY29wZS5udW0gKSB8fCAxO1xuXHRcdFx0XHQkc2NvcGUubnVtID0gbnVtID4gMSA/IG51bSAtIDEgOiBudW07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBzYXZlKCkge1xuXHRcdFx0XHRpZiggdHlwZW9mICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0cyAhPT0gJ29iamVjdCcgKSAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMgPSB7fTtcblx0XHRcdFx0Ly9pZiggISRzY29wZS4kc3RvcmFnZS5wcm9kdWN0c1skc2NvcGUuJHBhcmVudC5pbmZvLmlkXSApICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0c1skc2NvcGUuJHBhcmVudC5pbmZvLmlkXSA9IHt9O1xuXHRcdFx0XHQvL2RlbGV0ZSAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHM7XG5cdFx0XHRcdC8vbGV0IHByb2R1Y3QgPSAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHNbJHNjb3BlLiRwYXJlbnQuaW5mby5pZF07XG5cdFx0XHRcdFxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC5pbmZvICk7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coICRzY29wZS5udW0gKTtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyggJHNjb3BlLnBhcmVudFNsdWcgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCRzY29wZS4kc3RvcmFnZS5wcm9kdWN0c1skc2NvcGUuJHBhcmVudC5pbmZvLmlkXSA9ICRzY29wZS4kcGFyZW50LmluZm87XG5cdFx0XHRcdCRzY29wZS4kc3RvcmFnZS5wcm9kdWN0c1skc2NvcGUuJHBhcmVudC5pbmZvLmlkXS5udW0gPSAkc2NvcGUubnVtO1xuXHRcdFx0XHQkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHNbJHNjb3BlLiRwYXJlbnQuaW5mby5pZF0ucGFyZW50U2x1ZyA9ICRzY29wZS5wYXJlbnRTbHVnO1xuXHRcdFx0XHQkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHNbJHNjb3BlLiRwYXJlbnQuaW5mby5pZF0udGltZSA9ICRzY29wZS50aW1lO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgYWRkKCkge1xuXHRcdFx0XHRDYWxjdWxhdG9yLnNhdmUoKTtcblx0XHRcdFx0JGxvY2F0aW9uLnVybCgnL2NhcnQnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGRlbCggaWQgPSAwICkge1xuXHRcdFx0XHRpZCA9IHBhcnNlSW50KCBpZCApIHx8IDA7XG5cdFx0XHRcdGlmKCAkc2NvcGUuJHBhcmVudC5pbmZvLnByb2R1Y3RzWyBpZCBdICkgZGVsZXRlICRzY29wZS4kcGFyZW50LmluZm8ucHJvZHVjdHNbIGlkIF07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBjaGVja291dCgpIHtcblx0XHRcdFx0JGxvY2F0aW9uLnVybCgnL2NoZWNrb3V0Jyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyB0aGFua3MoKSB7XG5cdFx0XHRcdCRsb2NhdGlvbi51cmwoJy90aGFua3MnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGNoYW5nZVRpbWUoKSB7XG5cdFx0XHRcdC8vQ2FsY3VsYXRvci5zYXZlKCk7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coJHNjb3BlLnRpbWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGF0aWMgZ2V0IHByaWNlKCkge1xuXHRcdFx0XHRyZXR1cm4gJHNjb3BlICYmICRzY29wZS4kcGFyZW50ICYmICRzY29wZS4kcGFyZW50LmluZm8gJiYgJHNjb3BlLiRwYXJlbnQuaW5mby5kYXRhID8gJHNjb3BlLiRwYXJlbnQuaW5mby5kYXRhLnRhcmlmIDogMDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCBudW0oKSB7XG5cdFx0XHRcdHJldHVybiAkc2NvcGUuJHN0b3JhZ2UgJiYgJHNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzICYmICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0c1sgJHNjb3BlLmlkIF0gPyAkc2NvcGUuJHN0b3JhZ2UucHJvZHVjdHNbICRzY29wZS5pZCBdLm51bSA6IDE7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBnZXQgdG90YWwoKSB7XG5cdFx0XHRcdGxldCByZXMgPSAwO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIHR5cGVvZiAkc2NvcGUuJHBhcmVudC5pbmZvLnByb2R1Y3RzID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0XHRcdHJlcyA9IE9iamVjdC52YWx1ZXMoICRzY29wZS4kcGFyZW50LmluZm8ucHJvZHVjdHMgKS5yZWR1Y2UoIChzdW0sIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBzdW0gKyBjdXJyZW50Lm51bSAqIGN1cnJlbnQuZGF0YS50YXJpZjtcblx0XHRcdFx0XHR9LCAwKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN0YXRpYyBnZXQgbGVuZ3RoKCkge1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mICRzY29wZS4kc3RvcmFnZS5wcm9kdWN0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyggJHNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzICkubGVuZ3RoIDogMDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhdGljIGdldCB0aXRsZSgpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdCRzY29wZS5pbmMgPSAoKSA9PiB7XG5cdFx0XHRDYWxjdWxhdG9yLmluYygpO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLmRlYyA9ICgpID0+IHtcblx0XHRcdENhbGN1bGF0b3IuZGVjKCk7XG5cdFx0fTtcblx0XHRcblx0XHQkc2NvcGUuYWRkID0gKCkgPT4ge1xuXHRcdFx0Q2FsY3VsYXRvci5hZGQoKTtcblx0XHR9O1xuXHRcdFxuXHRcdCRzY29wZS50b3RhbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBDYWxjdWxhdG9yLnRvdGFsO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLmNoZWNrb3V0ID0gKCkgPT4ge1xuXHRcdFx0Q2FsY3VsYXRvci5jaGVja291dCgpO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLnRoYW5rcyA9ICgpID0+IHtcblx0XHRcdENhbGN1bGF0b3IudGhhbmtzKCk7XG5cdFx0fTtcblx0XHRcblx0XHQkc2NvcGUuY2hhbmdlVGltZSA9ICgpID0+IHtcblx0XHRcdENhbGN1bGF0b3IuY2hhbmdlVGltZSgpO1xuXHRcdH07XG5cdFx0XG5cdFx0JHNjb3BlLnRpdGxlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIENhbGN1bGF0b3IudGl0bGU7XG5cdFx0fTtcblx0XHRcblx0XHQkc2NvcGUudGltZSA9IFwiMDktMDBcIjtcblx0XHQkc2NvcGUudGV0aGVyU2VsZWN0Q2xhc3MgPSBcImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1sZyBibG9jay1jYWxjdWxhdG9yX19mb3JtLWdyb3VwXCI7XG5cdFx0XG5cdFx0JHNjb3BlLm51bSA9IENhbGN1bGF0b3IubnVtO1xuXHRcdCRzY29wZS5wcmljZSA9IENhbGN1bGF0b3IucHJpY2U7XG5cdH1dKTtcbn0pO1xuIl19
