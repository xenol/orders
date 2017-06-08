'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module', 'tetherSelect', 'tether'], function (directives, Select) {
	'use strict';

	directives.directive('tetherselect', [function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div data-ng-class="tetherSelectClass">' + '<select class="tether-select" ng-model="time" ng-change="changeTime(time)">' + '<option ng-repeat="option in options" value="{{option.value}}">{{option.name}}</option>' + '</select>' + '</div>',
			link: function link(scope, element, attrs) {
				var TetherSelect = function () {
					function TetherSelect() {
						var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

						_classCallCheck(this, TetherSelect);

						this.element = element;
						this.options = this.defaults();
						this.init();
					}

					_createClass(TetherSelect, [{
						key: 'defaults',
						value: function defaults() {
							return [{ 'name': '09:00', 'value': '09:00' }, { 'name': '10:00', 'value': '10:00' }, { 'name': '11:00', 'value': '11:00' }, { 'name': '12:00', 'value': '12:00' }, { 'name': '13:00', 'value': '13:00' }, { 'name': '14:00', 'value': '14:00' }, { 'name': '15:00', 'value': '15:00' }, { 'name': '16:00', 'value': '16:00' }, { 'name': '17:00', 'value': '17:00' }, { 'name': '18:00', 'value': '18:00' }];
						}
					}, {
						key: 'init',
						value: function init() {
							if (!this.element.classList.contains('select-select')) {
								return Select.init({
									el: this.element,
									className: 'tether-select-theme select-target-lg'
								});
							}
						}
					}]);

					return TetherSelect;
				}();

				var tetherSelect = new TetherSelect(element[0].childNodes[0]);

				scope.options = tetherSelect.options;

				scope.time = "09:00";
			}
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdGV0aGVyU2VsZWN0LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImRpcmVjdGl2ZXMiLCJTZWxlY3QiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwic2NvcGUiLCJlbGVtZW50IiwiYXR0cnMiLCJUZXRoZXJTZWxlY3QiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJpbml0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbCIsImNsYXNzTmFtZSIsInRldGhlclNlbGVjdCIsImNoaWxkTm9kZXMiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsT0FBTyxDQUFDLFVBQUQsRUFBYSxjQUFiLEVBQTZCLFFBQTdCLENBQVAsRUFBK0MsVUFBRUMsVUFBRixFQUFjQyxNQUFkLEVBQTBCO0FBQ3hFOztBQUVBRCxZQUFXRSxTQUFYLENBQXFCLGNBQXJCLEVBQXFDLENBQUMsWUFBTTtBQUMzQyxTQUFPO0FBQ05DLGFBQVUsR0FESjtBQUVOQyxZQUFTLElBRkg7QUFHTkMsZUFBWSxJQUhOO0FBSU5DLGFBQVUsNENBQ0osNkVBREksR0FFRix5RkFGRSxHQUdKLFdBSEksR0FJTixRQVJFO0FBU05DLFNBQU0sY0FBU0MsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQUEsUUFDL0JDLFlBRCtCO0FBRXBDLDZCQUErQjtBQUFBLFVBQWxCRixPQUFrQix1RUFBUixLQUFROztBQUFBOztBQUM5QixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLRyxPQUFMLEdBQWUsS0FBS0MsUUFBTCxFQUFmO0FBQ0EsV0FBS0MsSUFBTDtBQUNBOztBQU5tQztBQUFBO0FBQUEsaUNBUXpCO0FBQ1YsY0FBTyxDQUNOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFETSxFQUVOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFGTSxFQUdOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFITSxFQUlOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFKTSxFQUtOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFMTSxFQU1OLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFOTSxFQU9OLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFQTSxFQVFOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFSTSxFQVNOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFUTSxFQVVOLEVBQUUsUUFBUSxPQUFWLEVBQW1CLFNBQVMsT0FBNUIsRUFWTSxDQUFQO0FBWUE7QUFyQm1DO0FBQUE7QUFBQSw2QkF1QjdCO0FBQ04sV0FBSSxDQUFDLEtBQUtMLE9BQUwsQ0FBYU0sU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0MsZUFBaEMsQ0FBTCxFQUF3RDtBQUN2RCxlQUFPZixPQUFPYSxJQUFQLENBQVk7QUFDbEJHLGFBQUksS0FBS1IsT0FEUztBQUVsQlMsb0JBQVc7QUFGTyxTQUFaLENBQVA7QUFJQTtBQUNEO0FBOUJtQzs7QUFBQTtBQUFBOztBQWlDckMsUUFBSUMsZUFBZSxJQUFJUixZQUFKLENBQWtCRixRQUFRLENBQVIsRUFBV1csVUFBWCxDQUFzQixDQUF0QixDQUFsQixDQUFuQjs7QUFFQVosVUFBTUksT0FBTixHQUFnQk8sYUFBYVAsT0FBN0I7O0FBRUFKLFVBQU1hLElBQU4sR0FBYSxPQUFiO0FBQ0E7QUEvQ0ssR0FBUDtBQWlEQSxFQWxEb0MsQ0FBckM7QUFtREEsQ0F0REQiLCJmaWxlIjoiZGlyZWN0aXZlcy90ZXRoZXJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoWycuL21vZHVsZScsICd0ZXRoZXJTZWxlY3QnLCAndGV0aGVyJ10sICggZGlyZWN0aXZlcywgU2VsZWN0ICkgPT4ge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRkaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGV0aGVyc2VsZWN0JywgWygpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdFx0dGVtcGxhdGU6ICc8ZGl2IGRhdGEtbmctY2xhc3M9XCJ0ZXRoZXJTZWxlY3RDbGFzc1wiPicgK1xuXHRcdFx0XHRcdCAgICAnPHNlbGVjdCBjbGFzcz1cInRldGhlci1zZWxlY3RcIiBuZy1tb2RlbD1cInRpbWVcIiBuZy1jaGFuZ2U9XCJjaGFuZ2VUaW1lKHRpbWUpXCI+JyArXG5cdFx0XHRcdFx0ICAgICAgJzxvcHRpb24gbmctcmVwZWF0PVwib3B0aW9uIGluIG9wdGlvbnNcIiB2YWx1ZT1cInt7b3B0aW9uLnZhbHVlfX1cIj57e29wdGlvbi5uYW1lfX08L29wdGlvbj4nICtcblx0XHRcdFx0XHQgICAgJzwvc2VsZWN0PicgK1xuXHRcdFx0XHRcdCAgJzwvZGl2PicsXG5cdFx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdFx0Y2xhc3MgVGV0aGVyU2VsZWN0IHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvciggZWxlbWVudCA9IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuZGVmYXVsdHMoKTtcblx0XHRcdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRkZWZhdWx0cygpIHtcblx0XHRcdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMDk6MDAnLCAndmFsdWUnOiAnMDk6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTA6MDAnLCAndmFsdWUnOiAnMTA6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTE6MDAnLCAndmFsdWUnOiAnMTE6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTI6MDAnLCAndmFsdWUnOiAnMTI6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTM6MDAnLCAndmFsdWUnOiAnMTM6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTQ6MDAnLCAndmFsdWUnOiAnMTQ6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTU6MDAnLCAndmFsdWUnOiAnMTU6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTY6MDAnLCAndmFsdWUnOiAnMTY6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTc6MDAnLCAndmFsdWUnOiAnMTc6MDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgJ25hbWUnOiAnMTg6MDAnLCAndmFsdWUnOiAnMTg6MDAnIH0sXG5cdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbml0KCkge1xuXHRcdFx0XHRcdFx0aWYoICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3Qtc2VsZWN0JykgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBTZWxlY3QuaW5pdCh7XG5cdFx0XHRcdFx0XHRcdFx0ZWw6IHRoaXMuZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd0ZXRoZXItc2VsZWN0LXRoZW1lIHNlbGVjdC10YXJnZXQtbGcnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHRldGhlclNlbGVjdCA9IG5ldyBUZXRoZXJTZWxlY3QoIGVsZW1lbnRbMF0uY2hpbGROb2Rlc1swXSApO1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUub3B0aW9ucyA9IHRldGhlclNlbGVjdC5vcHRpb25zO1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUudGltZSA9IFwiMDk6MDBcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcbn0pO1xuIl19
