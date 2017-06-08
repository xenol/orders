'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('MainCtrl', ['$scope', '$rootScope', '$routeParams', '$location', function ($scope, $rootScope, $routeParams, $location) {
		var ScopeInfo = function () {
			function ScopeInfo() {
				_classCallCheck(this, ScopeInfo);

				this.id = parseInt($routeParams.id) || 0;
				this.info = $rootScope.info;
				this.slug = $routeParams.slug;
				this.infoBySlug = this.getBy('slug');
				this.info = this.infoBySlug;
				this.infoById = this.getBy('id');

				return this.infoById || this.infoBySlug || $rootScope.info;
			}

			_createClass(ScopeInfo, [{
				key: 'getFromChildren',
				value: function getFromChildren() {
					var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
					var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

					var item = obj.filter(function (elem) {
						return elem[prop] === value;
					});
					return item.length ? item.pop() : false;
				}
			}, {
				key: 'getBy',
				value: function getBy() {
					var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'slug';

					var obj = false;

					if (this[term]) {
						obj = this.getFromChildren(this.info.children, term, this[term]);
						this.maybeRedirect(obj, term === 'id' ? this.slug : '');
					}
					return obj;
				}
			}, {
				key: 'maybeRedirect',
				value: function maybeRedirect() {
					var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
					var uri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

					if (!obj) $location.url('/' + uri);
				}
			}]);

			return ScopeInfo;
		}();

		$scope.info = new ScopeInfo();
		$scope.title = $scope.info.title || $scope.info.name;
		$scope.description = $scope.info.teaser_card || $scope.info.teaser_list;
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL01haW5DdHJsLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImNvbnRyb2xsZXJzIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRyb290U2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCJTY29wZUluZm8iLCJpZCIsInBhcnNlSW50IiwiaW5mbyIsInNsdWciLCJpbmZvQnlTbHVnIiwiZ2V0QnkiLCJpbmZvQnlJZCIsIm9iaiIsInByb3AiLCJ2YWx1ZSIsIml0ZW0iLCJmaWx0ZXIiLCJlbGVtIiwibGVuZ3RoIiwicG9wIiwidGVybSIsImdldEZyb21DaGlsZHJlbiIsImNoaWxkcmVuIiwibWF5YmVSZWRpcmVjdCIsInVyaSIsInVybCIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGVhc2VyX2NhcmQiLCJ0ZWFzZXJfbGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLE9BQU8sQ0FBQyxVQUFELENBQVAsRUFBcUIsdUJBQWU7QUFDbkM7O0FBRUFDLGFBQVlDLFVBQVosQ0FBdUIsVUFBdkIsRUFBbUMsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixjQUF6QixFQUF5QyxXQUF6QyxFQUFzRCxVQUFFQyxNQUFGLEVBQVVDLFVBQVYsRUFBc0JDLFlBQXRCLEVBQW9DQyxTQUFwQyxFQUFtRDtBQUFBLE1BQ3JJQyxTQURxSTtBQUUxSSx3QkFBYztBQUFBOztBQUNiLFNBQUtDLEVBQUwsR0FBVUMsU0FBVUosYUFBYUcsRUFBdkIsS0FBK0IsQ0FBekM7QUFDQSxTQUFLRSxJQUFMLEdBQVlOLFdBQVdNLElBQXZCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTixhQUFhTSxJQUF6QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0MsS0FBTCxDQUFXLE1BQVgsQ0FBbEI7QUFDQSxTQUFLSCxJQUFMLEdBQVksS0FBS0UsVUFBakI7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLEtBQUtELEtBQUwsQ0FBVyxJQUFYLENBQWhCOztBQUVBLFdBQU8sS0FBS0MsUUFBTCxJQUFpQixLQUFLRixVQUF0QixJQUFvQ1IsV0FBV00sSUFBdEQ7QUFDQTs7QUFYeUk7QUFBQTtBQUFBLHNDQWFyRjtBQUFBLFNBQXBDSyxHQUFvQyx1RUFBOUIsRUFBOEI7QUFBQSxTQUExQkMsSUFBMEIsdUVBQW5CLElBQW1CO0FBQUEsU0FBYkMsS0FBYSx1RUFBTCxFQUFLOztBQUNwRCxTQUFJQyxPQUFPSCxJQUFJSSxNQUFKLENBQVk7QUFBQSxhQUFRQyxLQUFLSixJQUFMLE1BQWVDLEtBQXZCO0FBQUEsTUFBWixDQUFYO0FBQ0EsWUFBUUMsS0FBS0csTUFBTCxHQUFjSCxLQUFLSSxHQUFMLEVBQWQsR0FBMkIsS0FBbkM7QUFDQTtBQWhCeUk7QUFBQTtBQUFBLDRCQWtCcEg7QUFBQSxTQUFmQyxJQUFlLHVFQUFSLE1BQVE7O0FBQ3JCLFNBQUlSLE1BQU0sS0FBVjs7QUFFQSxTQUFJLEtBQUtRLElBQUwsQ0FBSixFQUFpQjtBQUNoQlIsWUFBTSxLQUFLUyxlQUFMLENBQXNCLEtBQUtkLElBQUwsQ0FBVWUsUUFBaEMsRUFBMENGLElBQTFDLEVBQWdELEtBQUtBLElBQUwsQ0FBaEQsQ0FBTjtBQUNBLFdBQUtHLGFBQUwsQ0FBb0JYLEdBQXBCLEVBQXlCUSxTQUFTLElBQVQsR0FBZ0IsS0FBS1osSUFBckIsR0FBNEIsRUFBckQ7QUFDQTtBQUNELFlBQU9JLEdBQVA7QUFDQTtBQTFCeUk7QUFBQTtBQUFBLG9DQTRCcEc7QUFBQSxTQUF2QkEsR0FBdUIsdUVBQWpCLEtBQWlCO0FBQUEsU0FBVlksR0FBVSx1RUFBSixFQUFJOztBQUNyQyxTQUFJLENBQUNaLEdBQUwsRUFBV1QsVUFBVXNCLEdBQVYsQ0FBYyxNQUFNRCxHQUFwQjtBQUNYO0FBOUJ5STs7QUFBQTtBQUFBOztBQWlDM0l4QixTQUFPTyxJQUFQLEdBQWMsSUFBSUgsU0FBSixFQUFkO0FBQ0FKLFNBQU8wQixLQUFQLEdBQWUxQixPQUFPTyxJQUFQLENBQVltQixLQUFaLElBQXFCMUIsT0FBT08sSUFBUCxDQUFZb0IsSUFBaEQ7QUFDQTNCLFNBQU80QixXQUFQLEdBQXFCNUIsT0FBT08sSUFBUCxDQUFZc0IsV0FBWixJQUEyQjdCLE9BQU9PLElBQVAsQ0FBWXVCLFdBQTVEO0FBQ0EsRUFwQ2tDLENBQW5DO0FBcUNBLENBeENEIiwiZmlsZSI6ImNvbnRyb2xsZXJzL01haW5DdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFsnLi9tb2R1bGUnXSwgY29udHJvbGxlcnMgPT4ge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRjb250cm9sbGVycy5jb250cm9sbGVyKCdNYWluQ3RybCcsIFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbicsICggJHNjb3BlLCAkcm9vdFNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiApID0+IHtcblx0XHRjbGFzcyBTY29wZUluZm8ge1xuXHRcdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRcdHRoaXMuaWQgPSBwYXJzZUludCggJHJvdXRlUGFyYW1zLmlkICkgfHwgMDtcblx0XHRcdFx0dGhpcy5pbmZvID0gJHJvb3RTY29wZS5pbmZvO1xuXHRcdFx0XHR0aGlzLnNsdWcgPSAkcm91dGVQYXJhbXMuc2x1Zztcblx0XHRcdFx0dGhpcy5pbmZvQnlTbHVnID0gdGhpcy5nZXRCeSgnc2x1ZycpO1xuXHRcdFx0XHR0aGlzLmluZm8gPSB0aGlzLmluZm9CeVNsdWc7XG5cdFx0XHRcdHRoaXMuaW5mb0J5SWQgPSB0aGlzLmdldEJ5KCdpZCcpO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5mb0J5SWQgfHwgdGhpcy5pbmZvQnlTbHVnIHx8ICRyb290U2NvcGUuaW5mbztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Z2V0RnJvbUNoaWxkcmVuKCBvYmogPSB7fSwgcHJvcCA9ICdpZCcsIHZhbHVlID0gXCJcIiApIHtcblx0XHRcdFx0bGV0IGl0ZW0gPSBvYmouZmlsdGVyKCBlbGVtID0+IGVsZW1bcHJvcF0gPT09IHZhbHVlICk7XG5cdFx0XHRcdHJldHVybiAgaXRlbS5sZW5ndGggPyBpdGVtLnBvcCgpIDogZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGdldEJ5KCB0ZXJtID0gJ3NsdWcnKSB7XG5cdFx0XHRcdGxldCBvYmogPSBmYWxzZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCB0aGlzW3Rlcm1dICkge1xuXHRcdFx0XHRcdG9iaiA9IHRoaXMuZ2V0RnJvbUNoaWxkcmVuKCB0aGlzLmluZm8uY2hpbGRyZW4sIHRlcm0sIHRoaXNbdGVybV0gKTtcblx0XHRcdFx0XHR0aGlzLm1heWJlUmVkaXJlY3QoIG9iaiwgdGVybSA9PT0gJ2lkJyA/IHRoaXMuc2x1ZyA6ICcnICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bWF5YmVSZWRpcmVjdCggb2JqID0gZmFsc2UsIHVyaSA9ICcnKSB7XG5cdFx0XHRcdGlmKCAhb2JqICkgJGxvY2F0aW9uLnVybCgnLycgKyB1cmkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQkc2NvcGUuaW5mbyA9IG5ldyBTY29wZUluZm8oKTtcblx0XHQkc2NvcGUudGl0bGUgPSAkc2NvcGUuaW5mby50aXRsZSB8fCAkc2NvcGUuaW5mby5uYW1lO1xuXHRcdCRzY29wZS5kZXNjcmlwdGlvbiA9ICRzY29wZS5pbmZvLnRlYXNlcl9jYXJkIHx8ICRzY29wZS5pbmZvLnRlYXNlcl9saXN0O1xuXHR9XSk7XG59KTtcbiJdfQ==
