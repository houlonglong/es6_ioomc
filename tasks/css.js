import gulp from 'gulp';;
import gulpif from 'gulp-if';
import livereoad from 'gulp-livereload';
import arg from './util/args.js'

gulp.task('css',()=>{
  return gulp.src('css/**/*.css ')
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(arg.wactch,livereoad()))
})
