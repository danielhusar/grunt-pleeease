'use strict';
var eachAsync = require('each-async');
var pleeease = require('pleeease');

module.exports = function (grunt) {
  grunt.registerMultiTask('pleeease', 'Postprocess CSS with ease', function () {
    var options = this.options();
    eachAsync(this.files, function (el, i, next) {
      var result = pleeease.process(grunt.file.read(el.src[0]), options);
      grunt.file.write(el.dest, result.css || result);
      next();
    }, this.async());
  });
};
