"use strict";

define(function () {
	/**
  * Create cross-browser XMLHttpRequest
  **/
	function getXHR() {
		var xhr = void 0;

		try {
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xhr = false;
			}
		}

		if (!xhr && typeof XMLHttpRequest != 'undefined') {
			xhr = new XMLHttpRequest();
		}

		return xhr;
	}

	window.getXHR = getXHR;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvZ2V0WEhSLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImdldFhIUiIsInhociIsIkFjdGl2ZVhPYmplY3QiLCJlIiwiRSIsIlhNTEh0dHBSZXF1ZXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLFlBQU07QUFDWjs7O0FBR0EsVUFBU0MsTUFBVCxHQUFrQjtBQUNqQixNQUFJQyxZQUFKOztBQUVBLE1BQUk7QUFDSEEsU0FBTSxJQUFJQyxhQUFKLENBQWtCLGdCQUFsQixDQUFOO0FBQ0EsR0FGRCxDQUdBLE9BQU9DLENBQVAsRUFBVTtBQUNULE9BQUk7QUFDSEYsVUFBTSxJQUFJQyxhQUFKLENBQWtCLG1CQUFsQixDQUFOO0FBQ0EsSUFGRCxDQUdBLE9BQU9FLENBQVAsRUFBVTtBQUNUSCxVQUFNLEtBQU47QUFDQTtBQUNEOztBQUVELE1BQUssQ0FBQ0EsR0FBRCxJQUFRLE9BQU9JLGNBQVAsSUFBeUIsV0FBdEMsRUFBb0Q7QUFDbkRKLFNBQU0sSUFBSUksY0FBSixFQUFOO0FBQ0E7O0FBRUQsU0FBT0osR0FBUDtBQUNBOztBQUVESyxRQUFPTixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBLENBM0JEIiwiZmlsZSI6InBsdWdpbnMvZ2V0WEhSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKCgpID0+IHtcblx0LyoqXG5cdCAqIENyZWF0ZSBjcm9zcy1icm93c2VyIFhNTEh0dHBSZXF1ZXN0XG5cdCAqKi9cblx0ZnVuY3Rpb24gZ2V0WEhSKCkge1xuXHRcdGxldCB4aHI7XG5cdFx0XG5cdFx0dHJ5IHtcblx0XHRcdHhociA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7XG5cdFx0fVxuXHRcdGNhdGNoIChlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR4aHIgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKEUpIHtcblx0XHRcdFx0eGhyID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXhociAmJiB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHhocjtcblx0fVxuXHRcblx0d2luZG93LmdldFhIUiA9IGdldFhIUjtcbn0pOyJdfQ==
