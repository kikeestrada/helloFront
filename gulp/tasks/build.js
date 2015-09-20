var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb){
  runSequence(
    'clean',
    'sketch-icon',
    'font-icon',
    ['rootfiles','images','fonts', 'normalize', 'styles', 'modernizr', 'jshint', 'scripts', 'template'],
    cb
  )
});
