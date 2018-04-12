'use strict';

var gulp = require('gulp');
var einrcoreTasks = require('einrcore-build');

einrcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
