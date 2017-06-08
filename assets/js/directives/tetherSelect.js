define(['./module', 'tetherSelect', 'tether'], ( directives, Select ) => {
	'use strict';
	
	directives.directive('tetherselect', [() => {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div data-ng-class="tetherSelectClass">' +
					    '<select class="tether-select" ng-model="time" ng-change="changeTime(time)">' +
					      '<option ng-repeat="option in options" value="{{option.value}}">{{option.name}}</option>' +
					    '</select>' +
					  '</div>',
			link: function(scope, element, attrs) {
				class TetherSelect {
					constructor( element = false ) {
						this.element = element;
						this.options = this.defaults();
						this.init();
					}
					
					defaults() {
						return [
							{ 'name': '09:00', 'value': '09:00' },
							{ 'name': '10:00', 'value': '10:00' },
							{ 'name': '11:00', 'value': '11:00' },
							{ 'name': '12:00', 'value': '12:00' },
							{ 'name': '13:00', 'value': '13:00' },
							{ 'name': '14:00', 'value': '14:00' },
							{ 'name': '15:00', 'value': '15:00' },
							{ 'name': '16:00', 'value': '16:00' },
							{ 'name': '17:00', 'value': '17:00' },
							{ 'name': '18:00', 'value': '18:00' },
						];
					}
					
					init() {
						if( !this.element.classList.contains('select-select') ) {
							return Select.init({
								el: this.element,
								className: 'tether-select-theme select-target-lg'
							});
						}
					}
				}
				
				let tetherSelect = new TetherSelect( element[0].childNodes[0] );
				
				scope.options = tetherSelect.options;
				
				scope.time = "09:00";
			}
		}
	}]);
});
