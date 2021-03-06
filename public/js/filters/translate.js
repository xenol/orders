'use strict';

define(['./module'], function (filters) {
	'use strict';

	return filters.filter('translate', ['$http', '$rootScope', function ($http, $rootScope) {
		return function (text) {
			return $rootScope.translate[String(text)] ? $rootScope.translate[String(text)] : String(text);
		};
	}]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMvdHJhbnNsYXRlLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImZpbHRlcnMiLCJmaWx0ZXIiLCIkaHR0cCIsIiRyb290U2NvcGUiLCJ0cmFuc2xhdGUiLCJTdHJpbmciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUMsVUFBRCxDQUFQLEVBQXFCLG1CQUFXO0FBQy9COztBQUVBLFFBQU9DLFFBQVFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQXVCO0FBQ2pGLFNBQU8sZ0JBQVE7QUFDZCxVQUFPQSxXQUFXQyxTQUFYLENBQXNCQyxPQUFPQyxJQUFQLENBQXRCLElBQXVDSCxXQUFXQyxTQUFYLENBQXNCQyxPQUFPQyxJQUFQLENBQXRCLENBQXZDLEdBQThFRCxPQUFPQyxJQUFQLENBQXJGO0FBQ0EsR0FGRDtBQUdBLEVBSmtDLENBQTVCLENBQVA7QUFLQSxDQVJEIiwiZmlsZSI6ImZpbHRlcnMvdHJhbnNsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFsnLi9tb2R1bGUnXSwgZmlsdGVycyA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHJldHVybiBmaWx0ZXJzLmZpbHRlcigndHJhbnNsYXRlJywgWyckaHR0cCcsICckcm9vdFNjb3BlJywgKCRodHRwLCAkcm9vdFNjb3BlKSA9PiB7XG5cdFx0cmV0dXJuIHRleHQgPT4ge1xuXHRcdFx0cmV0dXJuICRyb290U2NvcGUudHJhbnNsYXRlWyBTdHJpbmcodGV4dCkgXSA/ICRyb290U2NvcGUudHJhbnNsYXRlWyBTdHJpbmcodGV4dCkgXSA6IFN0cmluZyh0ZXh0KTtcblx0XHR9XG5cdH1dKTtcbn0pO1xuIl19
