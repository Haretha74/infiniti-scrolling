var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var connect = require("gulp-connect");

function processHTML() {
    return gulp.src("src/html/**/*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
}
function processSass() {
    return gulp.src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(cleanCss({compatibility: "ie8"}))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(connect.reload());

}

function watch() {
    gulp.watch("src/sass/**/*.scss", 
    {ignoreInitial: false},
    processSass);

    gulp.watch("src/html/**/*.html", 
    {ignoreInitial: false},
    processHTML);
}
 function server() {
   return connect.server( {
        root: 'dist',
        livereload: true
    });
}
gulp.task("default", gulp.parallel(server, watch)); 
 