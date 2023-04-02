const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser'); // 引入 gulp-terser

// 編譯 Sass
gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

// 壓縮圖片
gulp.task('imagemin', function() {
  return gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

// 壓縮 JavaScript
gulp.task('uglify-js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
});

// 開啟瀏覽器同步預覽
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// 監聽任務
gulp.task('watch', function() {
  gulp.watch('assets/sass/*.scss', gulp.series('sass'));
  gulp.watch('assets/images/*', gulp.series('imagemin'));
  gulp.watch('assets/js/*.js', gulp.series('uglify-js')); // 監聽 JavaScript 文件
  gulp.watch('*.html').on('change', browserSync.reload);
});

// 預設任務
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify-js', 'browser-sync', 'watch'));
