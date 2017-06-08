'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module'], function (directives) {
	'use strict';

	directives.directive('breadcrumbs', ['$route', function ($route) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {},
			template: '<ol class="breadcrumb breadcrumbs m-b-5">' + '<li ng-repeat="breadcrumb in breadcrumbs" data-ng-class="breadcrumb.className"><a href="{{breadcrumb.url}}" title="{{breadcrumb.name | translate}}" data-ng-if="breadcrumb.isLink">{{breadcrumb.name | translate}}</a><span data-ng-show="!breadcrumb.isLink">{{breadcrumb.name | translate}}</span></li>' + '</ol>',
			link: function link(scope, element, attrs) {
				scope.breadcrumbs = [];
				scope.$route = $route;

				var Breadcrumbs = function () {
					function Breadcrumbs() {
						var routeCurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

						_classCallCheck(this, Breadcrumbs);

						if (typeof routeCurrent.params === 'undefined') routeCurrent.params = {};
						if (typeof routeCurrent.scope === 'undefined') routeCurrent.scope = {};
						if (typeof routeCurrent.scope.info === 'undefined') routeCurrent.scope.info = {};

						this.id = routeCurrent.params.id ? routeCurrent.params.id : 0;
						this.info = routeCurrent.scope.info ? routeCurrent.scope.info : {};
						this.items = this.defaults();
						this.slug = routeCurrent.params.slug ? routeCurrent.params.slug : "";
						this.type = routeCurrent.$$route.type || this.info.type;

						return this.get();
					}

					_createClass(Breadcrumbs, [{
						key: 'defaults',
						value: function defaults() {
							return [{
								name: "Services",
								url: "#!/",
								isLink: false,
								className: ""
							}, {
								name: "Order",
								url: "#!/cart",
								isLink: false,
								className: ""
							}, {
								name: "Date and time",
								url: "#!/checkout",
								isLink: false,
								className: ""
							}];
						}
					}, {
						key: 'get',
						value: function get() {
							switch (this.type) {
								case "category":
									this.items[0].className = "breadcrumbs__li__active";
									break;

								case "service":
									this.items[0].isLink = true;
									break;

								case "cart":
									this.items[0].isLink = true;
									this.items[1].className = "breadcrumbs__li__active";
									break;

								case "checkout":
									this.items[0].isLink = true;
									this.items[1].isLink = true;
									this.items[2].className = "breadcrumbs__li__active";
									break;

								default:
									this.items[0].className = "breadcrumbs__li__active";
							}

							return this.items;
						}
					}]);

					return Breadcrumbs;
				}();

				scope.$on("$routeChangeSuccess", function (event, current, previous) {
					scope.breadcrumbs = new Breadcrumbs(scope.$route.current);
				});
			}
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYnJlYWRjcnVtYnMuanMiXSwibmFtZXMiOlsiZGVmaW5lIiwiZGlyZWN0aXZlcyIsImRpcmVjdGl2ZSIsIiRyb3V0ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRyYW5zY2x1ZGUiLCJzY29wZSIsInRlbXBsYXRlIiwibGluayIsImVsZW1lbnQiLCJhdHRycyIsImJyZWFkY3J1bWJzIiwiQnJlYWRjcnVtYnMiLCJyb3V0ZUN1cnJlbnQiLCJwYXJhbXMiLCJpbmZvIiwiaWQiLCJpdGVtcyIsImRlZmF1bHRzIiwic2x1ZyIsInR5cGUiLCIkJHJvdXRlIiwiZ2V0IiwibmFtZSIsInVybCIsImlzTGluayIsImNsYXNzTmFtZSIsIiRvbiIsImV2ZW50IiwiY3VycmVudCIsInByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxFQUFxQixzQkFBYztBQUNsQzs7QUFFQUMsWUFBV0MsU0FBWCxDQUFxQixhQUFyQixFQUFvQyxDQUFDLFFBQUQsRUFBVyxVQUFFQyxNQUFGLEVBQWM7QUFDNUQsU0FBTztBQUNOQyxhQUFVLEdBREo7QUFFTkMsWUFBUyxJQUZIO0FBR05DLGVBQVksSUFITjtBQUlOQyxVQUFPLEVBSkQ7QUFLTkMsYUFBVSw4Q0FDUCwyU0FETyxHQUVOLE9BUEU7QUFRTkMsU0FBTSxjQUFTRixLQUFULEVBQWdCRyxPQUFoQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDckNKLFVBQU1LLFdBQU4sR0FBb0IsRUFBcEI7QUFDQUwsVUFBTUosTUFBTixHQUFlQSxNQUFmOztBQUZxQyxRQUkvQlUsV0FKK0I7QUFLcEMsNEJBQWlDO0FBQUEsVUFBcEJDLFlBQW9CLHVFQUFMLEVBQUs7O0FBQUE7O0FBRWhDLFVBQUksT0FBT0EsYUFBYUMsTUFBcEIsS0FBK0IsV0FBbkMsRUFBaURELGFBQWFDLE1BQWIsR0FBc0IsRUFBdEI7QUFDakQsVUFBSSxPQUFPRCxhQUFhUCxLQUFwQixLQUE4QixXQUFsQyxFQUFnRE8sYUFBYVAsS0FBYixHQUFxQixFQUFyQjtBQUNoRCxVQUFJLE9BQU9PLGFBQWFQLEtBQWIsQ0FBbUJTLElBQTFCLEtBQW1DLFdBQXZDLEVBQXFERixhQUFhUCxLQUFiLENBQW1CUyxJQUFuQixHQUEwQixFQUExQjs7QUFFckQsV0FBS0MsRUFBTCxHQUFVSCxhQUFhQyxNQUFiLENBQW9CRSxFQUFwQixHQUF5QkgsYUFBYUMsTUFBYixDQUFvQkUsRUFBN0MsR0FBa0QsQ0FBNUQ7QUFDQSxXQUFLRCxJQUFMLEdBQVlGLGFBQWFQLEtBQWIsQ0FBbUJTLElBQW5CLEdBQTBCRixhQUFhUCxLQUFiLENBQW1CUyxJQUE3QyxHQUFvRCxFQUFoRTtBQUNBLFdBQUtFLEtBQUwsR0FBYSxLQUFLQyxRQUFMLEVBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVlOLGFBQWFDLE1BQWIsQ0FBb0JLLElBQXBCLEdBQTJCTixhQUFhQyxNQUFiLENBQW9CSyxJQUEvQyxHQUFzRCxFQUFsRTtBQUNBLFdBQUtDLElBQUwsR0FBWVAsYUFBYVEsT0FBYixDQUFxQkQsSUFBckIsSUFBNkIsS0FBS0wsSUFBTCxDQUFVSyxJQUFuRDs7QUFFQSxhQUFPLEtBQUtFLEdBQUwsRUFBUDtBQUNBOztBQWxCbUM7QUFBQTtBQUFBLGlDQW9CekI7QUFDVixjQUFPLENBQ047QUFDQ0MsY0FBTSxVQURQO0FBRUNDLGFBQUssS0FGTjtBQUdDQyxnQkFBUSxLQUhUO0FBSUNDLG1CQUFXO0FBSlosUUFETSxFQU9OO0FBQ0NILGNBQU0sT0FEUDtBQUVDQyxhQUFLLFNBRk47QUFHQ0MsZ0JBQVEsS0FIVDtBQUlDQyxtQkFBVztBQUpaLFFBUE0sRUFhTjtBQUNDSCxjQUFNLGVBRFA7QUFFQ0MsYUFBSyxhQUZOO0FBR0NDLGdCQUFRLEtBSFQ7QUFJQ0MsbUJBQVc7QUFKWixRQWJNLENBQVA7QUFvQkE7QUF6Q21DO0FBQUE7QUFBQSw0QkEyQzlCO0FBQ0wsZUFBUSxLQUFLTixJQUFiO0FBQ0MsYUFBSyxVQUFMO0FBQ0MsY0FBS0gsS0FBTCxDQUFXLENBQVgsRUFBY1MsU0FBZCxHQUEwQix5QkFBMUI7QUFDQTs7QUFFRCxhQUFLLFNBQUw7QUFDQyxjQUFLVCxLQUFMLENBQVcsQ0FBWCxFQUFjUSxNQUFkLEdBQXVCLElBQXZCO0FBQ0E7O0FBRUQsYUFBSyxNQUFMO0FBQ0MsY0FBS1IsS0FBTCxDQUFXLENBQVgsRUFBY1EsTUFBZCxHQUF1QixJQUF2QjtBQUNBLGNBQUtSLEtBQUwsQ0FBVyxDQUFYLEVBQWNTLFNBQWQsR0FBMEIseUJBQTFCO0FBQ0E7O0FBRUQsYUFBSyxVQUFMO0FBQ0MsY0FBS1QsS0FBTCxDQUFXLENBQVgsRUFBY1EsTUFBZCxHQUF1QixJQUF2QjtBQUNBLGNBQUtSLEtBQUwsQ0FBVyxDQUFYLEVBQWNRLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxjQUFLUixLQUFMLENBQVcsQ0FBWCxFQUFjUyxTQUFkLEdBQTBCLHlCQUExQjtBQUNBOztBQUVEO0FBQ0MsY0FBS1QsS0FBTCxDQUFXLENBQVgsRUFBY1MsU0FBZCxHQUEwQix5QkFBMUI7QUFyQkY7O0FBd0JBLGNBQU8sS0FBS1QsS0FBWjtBQUNBO0FBckVtQzs7QUFBQTtBQUFBOztBQXdFckNYLFVBQU1xQixHQUFOLENBQVUscUJBQVYsRUFBaUMsVUFBU0MsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLFFBQXpCLEVBQWtDO0FBQ2xFeEIsV0FBTUssV0FBTixHQUFvQixJQUFJQyxXQUFKLENBQWlCTixNQUFNSixNQUFOLENBQWEyQixPQUE5QixDQUFwQjtBQUNBLEtBRkQ7QUFHQTtBQW5GSyxHQUFQO0FBcUZBLEVBdEZtQyxDQUFwQztBQXVGQSxDQTFGRCIsImZpbGUiOiJkaXJlY3RpdmVzL2JyZWFkY3J1bWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFsnLi9tb2R1bGUnXSwgZGlyZWN0aXZlcyA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGRpcmVjdGl2ZXMuZGlyZWN0aXZlKCdicmVhZGNydW1icycsIFsnJHJvdXRlJywgKCAkcm91dGUgKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRcdHNjb3BlOiB7fSxcblx0XHRcdHRlbXBsYXRlOiAnPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBicmVhZGNydW1icyBtLWItNVwiPicgK1xuXHRcdFx0XHRcdFx0JzxsaSBuZy1yZXBlYXQ9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCIgZGF0YS1uZy1jbGFzcz1cImJyZWFkY3J1bWIuY2xhc3NOYW1lXCI+PGEgaHJlZj1cInt7YnJlYWRjcnVtYi51cmx9fVwiIHRpdGxlPVwie3ticmVhZGNydW1iLm5hbWUgfCB0cmFuc2xhdGV9fVwiIGRhdGEtbmctaWY9XCJicmVhZGNydW1iLmlzTGlua1wiPnt7YnJlYWRjcnVtYi5uYW1lIHwgdHJhbnNsYXRlfX08L2E+PHNwYW4gZGF0YS1uZy1zaG93PVwiIWJyZWFkY3J1bWIuaXNMaW5rXCI+e3ticmVhZGNydW1iLm5hbWUgfCB0cmFuc2xhdGV9fTwvc3Bhbj48L2xpPicgK1xuXHRcdFx0XHRcdCAgJzwvb2w+Jyxcblx0XHRcdGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0XHRzY29wZS5icmVhZGNydW1icyA9IFtdO1xuXHRcdFx0XHRzY29wZS4kcm91dGUgPSAkcm91dGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRjbGFzcyBCcmVhZGNydW1icyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoIHJvdXRlQ3VycmVudCA9IHt9ICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHJvdXRlQ3VycmVudC5wYXJhbXMgPT09ICd1bmRlZmluZWQnICkgcm91dGVDdXJyZW50LnBhcmFtcyA9IHt9O1xuXHRcdFx0XHRcdFx0aWYoIHR5cGVvZiByb3V0ZUN1cnJlbnQuc2NvcGUgPT09ICd1bmRlZmluZWQnICkgcm91dGVDdXJyZW50LnNjb3BlID0ge307XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHJvdXRlQ3VycmVudC5zY29wZS5pbmZvID09PSAndW5kZWZpbmVkJyApIHJvdXRlQ3VycmVudC5zY29wZS5pbmZvID0ge307XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHRoaXMuaWQgPSByb3V0ZUN1cnJlbnQucGFyYW1zLmlkID8gcm91dGVDdXJyZW50LnBhcmFtcy5pZCA6IDA7XG5cdFx0XHRcdFx0XHR0aGlzLmluZm8gPSByb3V0ZUN1cnJlbnQuc2NvcGUuaW5mbyA/IHJvdXRlQ3VycmVudC5zY29wZS5pbmZvIDoge307XG5cdFx0XHRcdFx0XHR0aGlzLml0ZW1zID0gdGhpcy5kZWZhdWx0cygpO1xuXHRcdFx0XHRcdFx0dGhpcy5zbHVnID0gcm91dGVDdXJyZW50LnBhcmFtcy5zbHVnID8gcm91dGVDdXJyZW50LnBhcmFtcy5zbHVnIDogXCJcIjtcblx0XHRcdFx0XHRcdHRoaXMudHlwZSA9IHJvdXRlQ3VycmVudC4kJHJvdXRlLnR5cGUgfHwgdGhpcy5pbmZvLnR5cGU7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmdldCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRkZWZhdWx0cygpIHtcblx0XHRcdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcIlNlcnZpY2VzXCIsXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBcIiMhL1wiLFxuXHRcdFx0XHRcdFx0XHRcdGlzTGluazogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcIlwiXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcIk9yZGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBcIiMhL2NhcnRcIixcblx0XHRcdFx0XHRcdFx0XHRpc0xpbms6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJcIlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogXCJEYXRlIGFuZCB0aW1lXCIsXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBcIiMhL2NoZWNrb3V0XCIsXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdFx0c3dpdGNoKCB0aGlzLnR5cGUgKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJjYXRlZ29yeVwiOlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXNbMF0uY2xhc3NOYW1lID0gXCJicmVhZGNydW1ic19fbGlfX2FjdGl2ZVwiO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRjYXNlIFwic2VydmljZVwiOlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXNbMF0uaXNMaW5rID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImNhcnRcIjpcblx0XHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zWzBdLmlzTGluayA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtc1sxXS5jbGFzc05hbWUgPSBcImJyZWFkY3J1bWJzX19saV9fYWN0aXZlXCI7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJjaGVja291dFwiOlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXNbMF0uaXNMaW5rID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zWzFdLmlzTGluayA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtc1syXS5jbGFzc05hbWUgPSBcImJyZWFkY3J1bWJzX19saV9fYWN0aXZlXCI7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtc1swXS5jbGFzc05hbWUgPSBcImJyZWFkY3J1bWJzX19saV9fYWN0aXZlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLml0ZW1zO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUuJG9uKFwiJHJvdXRlQ2hhbmdlU3VjY2Vzc1wiLCBmdW5jdGlvbihldmVudCwgY3VycmVudCwgcHJldmlvdXMpe1xuXHRcdFx0XHRcdHNjb3BlLmJyZWFkY3J1bWJzID0gbmV3IEJyZWFkY3J1bWJzKCBzY29wZS4kcm91dGUuY3VycmVudCApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcbn0pO1xuIl19
