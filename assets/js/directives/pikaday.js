define(['./module', 'pikaday', 'plugins/loadVendorCSS'], ( directives, Pikaday ) => {
	'use strict';
	
	directives.directive('pikaday', ['$filter', ( $filter ) => {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="form-group form-group-lg block-calculator__form-group">' +
					    '<div class="input-group">' +
					      '<input class="form-control block-calculator__input" data-ng-model="date" data-ng-change="changeDate(date)" type="text" aria-label="{{\'Use the arrow keys to pick a date\' | translate}}" readonly>' +
					      '<span class="input-group-addon btn block-calculator__input-addon" data-ng-click="togglePicker()"><span class="caret"></span></span>' + 
					    '</div>' +
					  '</div>',
			link: function(scope, element, attrs) {
				class PikadayPicker {
					constructor( element = false ) {
						this.element = element;
						this.picker = this.init();
					}
					
					toggle() {
						if( this.picker.isVisible() ) this.picker.hide();
						else this.picker.show();
					}
					
					init() {
						let promise = loadVendorCSS('pikaday'),
							date = new Date(),
							tomorrow = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 ),
							after31days = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 31 );
						
						promise.then(
							result => {
								this.picker =  new Pikaday({
									field: this.element,
									theme: 'pikaday-order-theme',
									firstDay: 1,
									defaultDate: tomorrow,
									setDefaultDate: tomorrow,
									toString(date, format) {
										const day = date.getDate();
										const month = [
											$filter('translate')('january'),
											$filter('translate')('february'),
											$filter('translate')('march'),
											$filter('translate')('april'),
											$filter('translate')('may'),
											$filter('translate')('june'),
											$filter('translate')('july'),
											$filter('translate')('august'),
											$filter('translate')('september'),
											$filter('translate')('october'),
											$filter('translate')('november'),
											$filter('translate')('december')
										][date.getMonth()];
										const weekday = [
											$filter('translate')('Sunday'), 
											$filter('translate')('Monday'), 
											$filter('translate')('Tuesday'),
											$filter('translate')('Wednesday'),
											$filter('translate')('Thursday'),
											$filter('translate')('Friday'),
											$filter('translate')('Saturday')
										][date.getDay()];
										return `${day} ${month}, ${weekday}`;
									},
									i18n: {
										previousMonth : $filter('translate')('Previous Month'),
										nextMonth : $filter('translate')('Next Month'),
										months : [
											$filter('translate')('January'),
											$filter('translate')('February'),
											$filter('translate')('March'),
											$filter('translate')('April'),
											$filter('translate')('May'),
											$filter('translate')('June'),
											$filter('translate')('July'),
											$filter('translate')('August'),
											$filter('translate')('September'),
											$filter('translate')('October'),
											$filter('translate')('November'),
											$filter('translate')('December')
										],
										weekdays : [
											$filter('translate')('Sunday'),
											$filter('translate')('Monday'),
											$filter('translate')('Tuesday'),
											$filter('translate')('Wednesday'),
											$filter('translate')('Thursday'),
											$filter('translate')('Friday'),
											$filter('translate')('Saturday')
										],
										weekdaysShort : [
											$filter('translate')('Sun'),
											$filter('translate')('Mon'),
											$filter('translate')('Tue'),
											$filter('translate')('Wed'),
											$filter('translate')('Thu'),
											$filter('translate')('Fri'),
											$filter('translate')('Sat')
										]
									},
								});
								
								this.picker.setMinDate( tomorrow );
								this.picker.setMaxDate( after31days );
							}
						);
					}
				}
				
				let pikadayPicker = new PikadayPicker( element[0].childNodes[0].childNodes[0] );
				
				scope.togglePicker = () => {
					pikadayPicker.toggle();
				}
			}
		}
	}]);
});
