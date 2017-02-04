var gulp 			= require('gulp'),
	watch			= require('gulp-watch'),
	browserSync		= require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify: false, //don't show update in top right corner
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){  //first is file on comp that we want to watch for saved changes to, second what we want it to do
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){  // ** = all folders
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});