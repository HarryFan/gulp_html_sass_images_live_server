const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser');

// 編譯 Sass
gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
});

// 壓縮圖片
gulp.task('imagemin', function() {
  return gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
});

// 壓縮 JavaScript
gulp.task('uglify-js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/assets/js'));
});

// 複製 HTML
gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// 開啟瀏覽器同步預覽
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});

// 監聽任務
gulp.task('watch', function() {
  gulp.watch('assets/sass/*.scss', gulp.series('sass'));
  gulp.watch('assets/images/*', gulp.series('imagemin'));
  gulp.watch('assets/js/*.js', gulp.series('uglify-js'));
  gulp.watch('./*.html', gulp.series('html'));
});

// 預設任務
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify-js', 'html', 'browser-sync', 'watch'));
