var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	// gulp.watch('src/javascript/**', ['browserify']);
	gulp.watch('src/stylesheets/**', ['styles']);
	gulp.watch('src/images/**', ['images']);
	livereload();
});
