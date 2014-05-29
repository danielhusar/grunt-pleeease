'use strict';
var eachAsync = require('each-async');
var pleeease = require('pleeease');

module.exports = function (grunt) {
  grunt.registerMultiTask('pleeease', 'Postprocess CSS with ease', function () {
    var options = this.options();
    eachAsync(this.files, function (el, i, next) {
      grunt.file.write(el.dest, pleeease.process(grunt.file.read(el.src[0]), options));
      next();
    }, this.async());
  });
};
