// Packages
// --------------------------------------
var gulp = require('./gulp')([
		'bowerBootstrap',
		'bowerBuild', 'bowerPublic',
		'bumpMajor', 'bumpMinor', 'bumpPatch', // Change project verion
		'clearBuild',
		'fontsBuild', 'fontsPublic',
		'imgBuild', 'imgPublic',
		'jadeBuild', 'jadePublic', 'jadePublicAll',
		'jsBuild', 'jsPublic',
		'jsonBuild', 'jsonPublic',
		'lessBuild', 'lessPublic',
		'server',
		'watch',
	]);

// Defaults bump tasks
// --------------------------------------
gulp.task('bump', ['bumpPatch']);

// Defaults clear tasks
// --------------------------------------
gulp.task('clear', ['clearBuild']);

// Defaults public
// --------------------------------------
gulp.task('public', [
	'fontsPublic',
	'imgPublic',
	'jadePublic',
	'jsPublic',
	'jsonPublic',
	'lessPublic',
	'bowerPublic',
]);

// Defaults build
// --------------------------------------
gulp.task('build', ['clear'], () => {
	gulp.start('bump');
	gulp.start('fontsBuild');
	gulp.start('imgBuild');
	gulp.start('jadeBuild');
	gulp.start('jsBuild');
	gulp.start('jsonBuild');
	gulp.start('lessBuild');
	gulp.start('bowerBuild');
});

// Defaults tasks
// --------------------------------------
gulp.task('default', ['watch', 'server']);