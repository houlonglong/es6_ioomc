import gulp from 'gulp';;
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-serve';
import args from './util/args.js'

gulp.task('server',(cb)=>{

  if(!args.watch) return cb()
  let server = liveserver.new(['--harmony','server/bin/www'])
  server.start()
  gulp.watch(['server/public/**/*.js','server/views/**/*.js'],function(file){
      server.notify.apply(serve,[file])
  })
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(file){
      console.log(file)
      server.notify.bind(server)()
  })
})
