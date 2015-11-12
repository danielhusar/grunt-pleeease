'use strict';
var path = require('path');
var eachAsync = require('each-async');
var pleeease = require('pleeease');

module.exports = function (grunt) {
  grunt.registerMultiTask('pleeease', 'Postprocess CSS with ease', function () {
    var options = this.options();

    eachAsync(this.files, function (el, i, next) {
      el.src.forEach(function (file) {
        var dest = el.dest;

        if (!path.extname(dest)) {
          dest = path.join(dest, path.basename(file));
        }

        pleeease.process(grunt.file.read(file), options).then(function (result) {
          grunt.file.write(dest, result.css || result);
          if (typeof result.map !== 'undefined') {
            grunt.file.write(dest + '.map', result.map.toString());
          }
          next();
       }, function (error) {
          grunt.log.error(error + '\n');
          grunt.warn('');
          next(err);
          return;
        });
      });
    }.bind(this), this.async());
  });
};
