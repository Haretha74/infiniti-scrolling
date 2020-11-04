var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var connect = require("gulp-connect");
var babel = require("gulp-babel");
var sourcemap = require("gulp-sourcemaps")
var concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
var imagResize = require("gulp-image-resize");


function processHTML() {
	return gulp.src("src/html/**/*.html")
		.pipe(gulp.dest("dist/"))
		.pipe(connect.reload());
}

function processSass() {
	return gulp.src("src/sass/**/*.scss")
		.pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie9" }))
		.pipe(gulp.dest("dist/assets/css"))
		.pipe(connect.reload());
}
function processJs() {
	return gulp.src("src/js/**/*.js")
	.pipe(sourcemap.init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("app.js"))
	.pipe(sourcemap.write("."))
	.pipe(gulp.dest("dist/assets/js"))
		.pipe(connect.reload());
}
// function processImages() {
// 	return gulp.src(["src/images/**/*", "!src/images/**/thumb.db"])
// 	.pipe(imagemin([
// 		imagemin.mozjpeg({quality: 75}),
// 		imagemin.optipng({optimizationLevel: 1})
// 	]))
// 	 .pipe(imagResize({
// 		width: 500,
// 		crop: false,
// 		upscale: false
// 	})) 
// 	.pipe(gulp.dest("dist/assets/media"))
// 	.pipe(connect.reload())
// }

function watch() {
	gulp.watch("src/sass/**/*.scss",
	{ ignoreInitial: false },
	processSass);
	gulp.watch("src/html/**/*.html",
	{ ignoreInitial: false },
	processHTML);
	gulp.watch("src/js/**/*.js",
	{ ignoreInitial: false },
	processJs);
	// gulp.watch("src/images/**/*",
	// {ignoreInitial: false},
	// processImages);
}

function server() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
}

gulp.task("default", gulp.parallel(server, watch));
