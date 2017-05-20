import gulp from 'gulp';;
import gulpif from 'gulp-if';
import util from 'gulp-util';
//import livereoad from 'gulp-livereload';
import args from './util/args.js'

gulp.task('brower',(cb)=>{
    if(!args.watch) return cb()
    gulp.wactch('app/**/*.js',['scripts'])
    gulp.wactch('app/**/*.ejs',['pages'])
    gulp.wactch('app/**/*.css',['css'])
})
