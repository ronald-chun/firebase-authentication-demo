var gulp = require('gulp');
var livereload = require('gulp-livereload');

var HTML_PATH = '**/*.html';

gulp.task('html', function(){
	return gulp.src(HTML_PATH).pipe(livereload());
});

gulp.task('watch', function() {
	console.log("Starting watch task");
	require('./app.js');
	livereload.listen(8888);
	gulp.watch(HTML_PATH, ['html']);
});
