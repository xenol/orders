'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module', 'tetherSelect'], function (directives, Select) {
	'use strict';

	directives.directive('tetherselect', ['screenMode', function (screenMode) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div data-ng-class="tetherSelectClass">' + '<select class="tether-select form-control" ng-model="time" ng-change="changeTime(time)">' + '<option ng-repeat="option in options" value="{{option.value}}">{{option.name}}</option>' + '</select>' + '</div>',
			link: function link(scope, element, attrs) {
				var TetherSelect = function () {
					function TetherSelect() {
						var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

						_classCallCheck(this, TetherSelect);

						this.element = element;
						this.options = this.defaults();
						this.select = this.init();
					}

					_createClass(TetherSelect, [{
						key: 'defaults',
						value: function defaults() {
							return [{ 'name': '09:00', 'value': '09:00' }, { 'name': '10:00', 'value': '10:00' }, { 'name': '11:00', 'value': '11:00' }, { 'name': '12:00', 'value': '12:00' }, { 'name': '13:00', 'value': '13:00' }, { 'name': '14:00', 'value': '14:00' }, { 'name': '15:00', 'value': '15:00' }, { 'name': '16:00', 'value': '16:00' }, { 'name': '17:00', 'value': '17:00' }, { 'name': '18:00', 'value': '18:00' }];
						}
					}, {
						key: 'init',
						value: function init() {
							if (screenMode() == "xs") return;

							return Select.init({
								el: this.element,
								className: 'tether-select-theme select-target-lg',
								useNative: false
							});
						}
					}, {
						key: 'time',
						get: function get() {
							return this.options[0].name;
						}
					}]);

					return TetherSelect;
				}();

				var tetherSelect = new TetherSelect(element[0].childNodes[0]);

				scope.options = tetherSelect.options;
				scope.time = tetherSelect.time;
			}
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdGV0aGVyU2VsZWN0LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImRpcmVjdGl2ZXMiLCJTZWxlY3QiLCJkaXJlY3RpdmUiLCJzY3JlZW5Nb2RlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHJzIiwiVGV0aGVyU2VsZWN0Iiwib3B0aW9ucyIsImRlZmF1bHRzIiwic2VsZWN0IiwiaW5pdCIsImVsIiwiY2xhc3NOYW1lIiwidXNlTmF0aXZlIiwibmFtZSIsInRldGhlclNlbGVjdCIsImNoaWxkTm9kZXMiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsT0FBTyxDQUFDLFVBQUQsRUFBYSxjQUFiLENBQVAsRUFBcUMsVUFBRUMsVUFBRixFQUFjQyxNQUFkLEVBQTBCO0FBQzlEOztBQUVBRCxZQUFXRSxTQUFYLENBQXFCLGNBQXJCLEVBQXFDLENBQUMsWUFBRCxFQUFlLFVBQUVDLFVBQUYsRUFBa0I7QUFDckUsU0FBTztBQUNOQyxhQUFVLEdBREo7QUFFTkMsWUFBUyxJQUZIO0FBR05DLGVBQVksSUFITjtBQUlOQyxhQUFVLDRDQUNKLDBGQURJLEdBRUYseUZBRkUsR0FHSixXQUhJLEdBSU4sUUFSRTtBQVNOQyxTQUFNLGNBQVNDLEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCQyxLQUF6QixFQUFnQztBQUFBLFFBQy9CQyxZQUQrQjtBQUVwQyw2QkFBK0I7QUFBQSxVQUFsQkYsT0FBa0IsdUVBQVIsS0FBUTs7QUFBQTs7QUFDOUIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0csT0FBTCxHQUFlLEtBQUtDLFFBQUwsRUFBZjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLEVBQWQ7QUFDQTs7QUFObUM7QUFBQTtBQUFBLGlDQVF6QjtBQUNWLGNBQU8sQ0FDTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBRE0sRUFFTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBRk0sRUFHTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBSE0sRUFJTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBSk0sRUFLTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBTE0sRUFNTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBTk0sRUFPTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBUE0sRUFRTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBUk0sRUFTTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBVE0sRUFVTixFQUFFLFFBQVEsT0FBVixFQUFtQixTQUFTLE9BQTVCLEVBVk0sQ0FBUDtBQVlBO0FBckJtQztBQUFBO0FBQUEsNkJBdUI3QjtBQUNOLFdBQUliLGdCQUFnQixJQUFwQixFQUEyQjs7QUFFM0IsY0FBT0YsT0FBT2UsSUFBUCxDQUFZO0FBQ2xCQyxZQUFJLEtBQUtQLE9BRFM7QUFFbEJRLG1CQUFXLHNDQUZPO0FBR2xCQyxtQkFBVztBQUhPLFFBQVosQ0FBUDtBQUtBO0FBL0JtQztBQUFBO0FBQUEsMEJBaUN6QjtBQUNWLGNBQU8sS0FBS04sT0FBTCxDQUFhLENBQWIsRUFBZ0JPLElBQXZCO0FBQ0E7QUFuQ21DOztBQUFBO0FBQUE7O0FBc0NyQyxRQUFJQyxlQUFlLElBQUlULFlBQUosQ0FBa0JGLFFBQVEsQ0FBUixFQUFXWSxVQUFYLENBQXNCLENBQXRCLENBQWxCLENBQW5COztBQUVBYixVQUFNSSxPQUFOLEdBQWdCUSxhQUFhUixPQUE3QjtBQUNBSixVQUFNYyxJQUFOLEdBQWFGLGFBQWFFLElBQTFCO0FBQ0E7QUFuREssR0FBUDtBQXFEQSxFQXREb0MsQ0FBckM7QUF1REEsQ0ExREQiLCJmaWxlIjoiZGlyZWN0aXZlcy90ZXRoZXJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoWycuL21vZHVsZScsICd0ZXRoZXJTZWxlY3QnXSwgKCBkaXJlY3RpdmVzLCBTZWxlY3QgKSA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGRpcmVjdGl2ZXMuZGlyZWN0aXZlKCd0ZXRoZXJzZWxlY3QnLCBbJ3NjcmVlbk1vZGUnLCAoIHNjcmVlbk1vZGUgKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlOiAnPGRpdiBkYXRhLW5nLWNsYXNzPVwidGV0aGVyU2VsZWN0Q2xhc3NcIj4nICtcblx0XHRcdFx0XHQgICAgJzxzZWxlY3QgY2xhc3M9XCJ0ZXRoZXItc2VsZWN0IGZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwidGltZVwiIG5nLWNoYW5nZT1cImNoYW5nZVRpbWUodGltZSlcIj4nICtcblx0XHRcdFx0XHQgICAgICAnPG9wdGlvbiBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gb3B0aW9uc1wiIHZhbHVlPVwie3tvcHRpb24udmFsdWV9fVwiPnt7b3B0aW9uLm5hbWV9fTwvb3B0aW9uPicgK1xuXHRcdFx0XHRcdCAgICAnPC9zZWxlY3Q+JyArXG5cdFx0XHRcdFx0ICAnPC9kaXY+Jyxcblx0XHRcdGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0XHRjbGFzcyBUZXRoZXJTZWxlY3Qge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yKCBlbGVtZW50ID0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zID0gdGhpcy5kZWZhdWx0cygpO1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3QgPSB0aGlzLmluaXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZGVmYXVsdHMoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzA5OjAwJywgJ3ZhbHVlJzogJzA5OjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzEwOjAwJywgJ3ZhbHVlJzogJzEwOjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzExOjAwJywgJ3ZhbHVlJzogJzExOjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzEyOjAwJywgJ3ZhbHVlJzogJzEyOjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzEzOjAwJywgJ3ZhbHVlJzogJzEzOjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzE0OjAwJywgJ3ZhbHVlJzogJzE0OjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzE1OjAwJywgJ3ZhbHVlJzogJzE1OjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzE2OjAwJywgJ3ZhbHVlJzogJzE2OjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzE3OjAwJywgJ3ZhbHVlJzogJzE3OjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7ICduYW1lJzogJzE4OjAwJywgJ3ZhbHVlJzogJzE4OjAwJyB9LFxuXHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5pdCgpIHtcblx0XHRcdFx0XHRcdGlmKCBzY3JlZW5Nb2RlKCkgPT0gXCJ4c1wiICkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gU2VsZWN0LmluaXQoe1xuXHRcdFx0XHRcdFx0XHRlbDogdGhpcy5lbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd0ZXRoZXItc2VsZWN0LXRoZW1lIHNlbGVjdC10YXJnZXQtbGcnLFxuXHRcdFx0XHRcdFx0XHR1c2VOYXRpdmU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGdldCB0aW1lKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uc1swXS5uYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHRldGhlclNlbGVjdCA9IG5ldyBUZXRoZXJTZWxlY3QoIGVsZW1lbnRbMF0uY2hpbGROb2Rlc1swXSApO1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUub3B0aW9ucyA9IHRldGhlclNlbGVjdC5vcHRpb25zO1xuXHRcdFx0XHRzY29wZS50aW1lID0gdGV0aGVyU2VsZWN0LnRpbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG59KTtcbiJdfQ==
