'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['./module', 'pikaday', 'plugins/loadVendorCSS'], function (directives, Pikaday) {
	'use strict';

	directives.directive('pikaday', ['$filter', function ($filter) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="form-group form-group-lg block-calculator__form-group">' + '<div class="input-group">' + '<input class="form-control block-calculator__input" data-ng-model="date" data-ng-change="changeDate(date)" type="text" aria-label="{{\'Use the arrow keys to pick a date\' | translate}}" readonly>' + '<span class="input-group-addon btn block-calculator__input-addon" data-ng-click="togglePicker()"><span class="caret"></span></span>' + '</div>' + '</div>',
			link: function link(scope, element, attrs) {
				var PikadayPicker = function () {
					function PikadayPicker() {
						var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

						_classCallCheck(this, PikadayPicker);

						this.element = element;
						this.picker = this.init();
					}

					_createClass(PikadayPicker, [{
						key: 'toggle',
						value: function toggle() {
							if (this.picker.isVisible()) this.picker.hide();else this.picker.show();
						}
					}, {
						key: 'init',
						value: function init() {
							var _this = this;

							var promise = loadVendorCSS('pikaday'),
							    date = new Date(),
							    tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
							    after31days = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 31);

							promise.then(function (result) {
								_this.picker = new Pikaday({
									field: _this.element,
									theme: 'pikaday-order-theme',
									firstDay: 1,
									defaultDate: tomorrow,
									setDefaultDate: tomorrow,
									toString: function toString(date, format) {
										var day = date.getDate();
										var month = [$filter('translate')('january'), $filter('translate')('february'), $filter('translate')('march'), $filter('translate')('april'), $filter('translate')('may'), $filter('translate')('june'), $filter('translate')('july'), $filter('translate')('august'), $filter('translate')('september'), $filter('translate')('october'), $filter('translate')('november'), $filter('translate')('december')][date.getMonth()];
										var weekday = [$filter('translate')('Sunday'), $filter('translate')('Monday'), $filter('translate')('Tuesday'), $filter('translate')('Wednesday'), $filter('translate')('Thursday'), $filter('translate')('Friday'), $filter('translate')('Saturday')][date.getDay()];
										return day + ' ' + month + ', ' + weekday;
									},

									i18n: {
										previousMonth: $filter('translate')('Previous Month'),
										nextMonth: $filter('translate')('Next Month'),
										months: [$filter('translate')('January'), $filter('translate')('February'), $filter('translate')('March'), $filter('translate')('April'), $filter('translate')('May'), $filter('translate')('June'), $filter('translate')('July'), $filter('translate')('August'), $filter('translate')('September'), $filter('translate')('October'), $filter('translate')('November'), $filter('translate')('December')],
										weekdays: [$filter('translate')('Sunday'), $filter('translate')('Monday'), $filter('translate')('Tuesday'), $filter('translate')('Wednesday'), $filter('translate')('Thursday'), $filter('translate')('Friday'), $filter('translate')('Saturday')],
										weekdaysShort: [$filter('translate')('Sun'), $filter('translate')('Mon'), $filter('translate')('Tue'), $filter('translate')('Wed'), $filter('translate')('Thu'), $filter('translate')('Fri'), $filter('translate')('Sat')]
									}
								});

								_this.picker.setMinDate(tomorrow);
								_this.picker.setMaxDate(after31days);
							});
						}
					}]);

					return PikadayPicker;
				}();

				var pikadayPicker = new PikadayPicker(element[0].childNodes[0].childNodes[0]);

				scope.togglePicker = function () {
					pikadayPicker.toggle();
				};
			}
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcGlrYWRheS5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJkaXJlY3RpdmVzIiwiUGlrYWRheSIsImRpcmVjdGl2ZSIsIiRmaWx0ZXIiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwic2NvcGUiLCJlbGVtZW50IiwiYXR0cnMiLCJQaWthZGF5UGlja2VyIiwicGlja2VyIiwiaW5pdCIsImlzVmlzaWJsZSIsImhpZGUiLCJzaG93IiwicHJvbWlzZSIsImxvYWRWZW5kb3JDU1MiLCJkYXRlIiwiRGF0ZSIsInRvbW9ycm93IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJhZnRlcjMxZGF5cyIsInRoZW4iLCJmaWVsZCIsInRoZW1lIiwiZmlyc3REYXkiLCJkZWZhdWx0RGF0ZSIsInNldERlZmF1bHREYXRlIiwidG9TdHJpbmciLCJmb3JtYXQiLCJkYXkiLCJtb250aCIsIndlZWtkYXkiLCJnZXREYXkiLCJpMThuIiwicHJldmlvdXNNb250aCIsIm5leHRNb250aCIsIm1vbnRocyIsIndlZWtkYXlzIiwid2Vla2RheXNTaG9ydCIsInNldE1pbkRhdGUiLCJzZXRNYXhEYXRlIiwicGlrYWRheVBpY2tlciIsImNoaWxkTm9kZXMiLCJ0b2dnbGVQaWNrZXIiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsdUJBQXhCLENBQVAsRUFBeUQsVUFBRUMsVUFBRixFQUFjQyxPQUFkLEVBQTJCO0FBQ25GOztBQUVBRCxZQUFXRSxTQUFYLENBQXFCLFNBQXJCLEVBQWdDLENBQUMsU0FBRCxFQUFZLFVBQUVDLE9BQUYsRUFBZTtBQUMxRCxTQUFPO0FBQ05DLGFBQVUsR0FESjtBQUVOQyxZQUFTLElBRkg7QUFHTkMsZUFBWSxJQUhOO0FBSU5DLGFBQVUsd0VBQ0osMkJBREksR0FFRixxTUFGRSxHQUdGLHFJQUhFLEdBSUos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OztBQXVFQSxjQUFLVSxNQUFMLENBQVlnQyxVQUFaLENBQXdCdkIsUUFBeEI7QUFDQSxjQUFLVCxNQUFMLENBQVlpQyxVQUFaLENBQXdCcEIsV0FBeEI7QUFDQSxRQTNFRjtBQTZFQTtBQS9GbUM7O0FBQUE7QUFBQTs7QUFrR3JDLFFBQUlxQixnQkFBZ0IsSUFBSW5DLGFBQUosQ0FBbUJGLFFBQVEsQ0FBUixFQUFXc0MsVUFBWCxDQUFzQixDQUF0QixFQUF5QkEsVUFBekIsQ0FBb0MsQ0FBcEMsQ0FBbkIsQ0FBcEI7O0FBRUF2QyxVQUFNd0MsWUFBTixHQUFxQixZQUFNO0FBQzFCRixtQkFBY0csTUFBZDtBQUNBLEtBRkQ7QUFHQTtBQWpISyxHQUFQO0FBbUhBLEVBcEgrQixDQUFoQztBQXFIQSxDQXhIRCIsImZpbGUiOiJkaXJlY3RpdmVzL3Bpa2FkYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoWycuL21vZHVsZScsICdwaWthZGF5JywgJ3BsdWdpbnMvbG9hZFZlbmRvckNTUyddLCAoIGRpcmVjdGl2ZXMsIFBpa2FkYXkgKSA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGRpcmVjdGl2ZXMuZGlyZWN0aXZlKCdwaWthZGF5JywgWyckZmlsdGVyJywgKCAkZmlsdGVyICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0XHR0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtbGcgYmxvY2stY2FsY3VsYXRvcl9fZm9ybS1ncm91cFwiPicgK1xuXHRcdFx0XHRcdCAgICAnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+JyArXG5cdFx0XHRcdFx0ICAgICAgJzxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBibG9jay1jYWxjdWxhdG9yX19pbnB1dFwiIGRhdGEtbmctbW9kZWw9XCJkYXRlXCIgZGF0YS1uZy1jaGFuZ2U9XCJjaGFuZ2VEYXRlKGRhdGUpXCIgdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwie3tcXCdVc2UgdGhlIGFycm93IGtleXMgdG8gcGljayBhIGRhdGVcXCcgfCB0cmFuc2xhdGV9fVwiIHJlYWRvbmx5PicgK1xuXHRcdFx0XHRcdCAgICAgICc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBibG9jay1jYWxjdWxhdG9yX19pbnB1dC1hZGRvblwiIGRhdGEtbmctY2xpY2s9XCJ0b2dnbGVQaWNrZXIoKVwiPjxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9zcGFuPicgKyBcblx0XHRcdFx0XHQgICAgJzwvZGl2PicgK1xuXHRcdFx0XHRcdCAgJzwvZGl2PicsXG5cdFx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdFx0Y2xhc3MgUGlrYWRheVBpY2tlciB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoIGVsZW1lbnQgPSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlciA9IHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0b2dnbGUoKSB7XG5cdFx0XHRcdFx0XHRpZiggdGhpcy5waWNrZXIuaXNWaXNpYmxlKCkgKSB0aGlzLnBpY2tlci5oaWRlKCk7XG5cdFx0XHRcdFx0XHRlbHNlIHRoaXMucGlja2VyLnNob3coKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5pdCgpIHtcblx0XHRcdFx0XHRcdGxldCBwcm9taXNlID0gbG9hZFZlbmRvckNTUygncGlrYWRheScpLFxuXHRcdFx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoKSxcblx0XHRcdFx0XHRcdFx0dG9tb3Jyb3cgPSBuZXcgRGF0ZSggZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgMSApLFxuXHRcdFx0XHRcdFx0XHRhZnRlcjMxZGF5cyA9IG5ldyBEYXRlKCBkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyAzMSApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwcm9taXNlLnRoZW4oXG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIgPSAgbmV3IFBpa2FkYXkoe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmllbGQ6IHRoaXMuZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lOiAncGlrYWRheS1vcmRlci10aGVtZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRmaXJzdERheTogMSxcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHREYXRlOiB0b21vcnJvdyxcblx0XHRcdFx0XHRcdFx0XHRcdHNldERlZmF1bHREYXRlOiB0b21vcnJvdyxcblx0XHRcdFx0XHRcdFx0XHRcdHRvU3RyaW5nKGRhdGUsIGZvcm1hdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgbW9udGggPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ2phbnVhcnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnZmVicnVhcnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnbWFyY2gnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnYXByaWwnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnbWF5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ2p1bmUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnanVseScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdhdWd1c3QnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnc2VwdGVtYmVyJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ29jdG9iZXInKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnbm92ZW1iZXInKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnZGVjZW1iZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdW2RhdGUuZ2V0TW9udGgoKV07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHdlZWtkYXkgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1N1bmRheScpLCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnTW9uZGF5JyksIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdUdWVzZGF5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1dlZG5lc2RheScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdUaHVyc2RheScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdGcmlkYXknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnU2F0dXJkYXknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdW2RhdGUuZ2V0RGF5KCldO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYCR7ZGF5fSAke21vbnRofSwgJHt3ZWVrZGF5fWA7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0aTE4bjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2aW91c01vbnRoIDogJGZpbHRlcigndHJhbnNsYXRlJykoJ1ByZXZpb3VzIE1vbnRoJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5leHRNb250aCA6ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdOZXh0IE1vbnRoJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vbnRocyA6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnSmFudWFyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdGZWJydWFyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdNYXJjaCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdBcHJpbCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdNYXknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnSnVuZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdKdWx5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ0F1Z3VzdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdTZXB0ZW1iZXInKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnT2N0b2JlcicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdOb3ZlbWJlcicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdEZWNlbWJlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdlZWtkYXlzIDogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdTdW5kYXknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnTW9uZGF5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1R1ZXNkYXknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnV2VkbmVzZGF5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1RodXJzZGF5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ0ZyaWRheScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdTYXR1cmRheScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdlZWtkYXlzU2hvcnQgOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1N1bicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdNb24nKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnVHVlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1dlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWx0ZXIoJ3RyYW5zbGF0ZScpKCdUaHUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmlsdGVyKCd0cmFuc2xhdGUnKSgnRnJpJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGZpbHRlcigndHJhbnNsYXRlJykoJ1NhdCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc2V0TWluRGF0ZSggdG9tb3Jyb3cgKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5zZXRNYXhEYXRlKCBhZnRlcjMxZGF5cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHBpa2FkYXlQaWNrZXIgPSBuZXcgUGlrYWRheVBpY2tlciggZWxlbWVudFswXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0gKTtcblx0XHRcdFx0XG5cdFx0XHRcdHNjb3BlLnRvZ2dsZVBpY2tlciA9ICgpID0+IHtcblx0XHRcdFx0XHRwaWthZGF5UGlja2VyLnRvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG59KTtcbiJdfQ==
