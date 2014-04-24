var sass         = require('gulp-sass');
var csso         = require('gulp-csso');
var gulp         = require('gulp');
var livereload   = require('gulp-livereload');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
	return gulp.src('./src/stylesheets/*.scss')
		.pipe(sass())
    .pipe(csso())
		.on('error', handleErrors)
    .pipe(gulp.dest('./build/stylesheets'))
		.pipe(livereload());
});

// gulp.task('styles', function() {
//   return gulp.src('src/styles/main.scss')
//     .pipe(sass({
//       onError: hueError
//     }))
//     .pipe(autoprefixer('last 3 version'))
//     .pipe(gulp.dest('build/assets/styles'))
//     .pipe(csso())
//     .pipe(rename({suffix: ".min"}))
//     .pipe(gulp.dest('build/assets/styles'))
//     .pipe(livereload(server));
// });
