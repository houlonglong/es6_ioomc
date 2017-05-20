import gulp from 'gulp';;
import gulpif from 'gulp-if';
import livereoad from 'gulp-livereload';
import arg from './util/args.js'

gulp.task('page',()=>{
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(arg.wactch,livereoad()))
})
