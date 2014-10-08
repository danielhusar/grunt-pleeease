'use strict';
var path = require('path');
var eachAsync = require('each-async');
var pleeease = require('pleeease');

module.exports = function (grunt) {
  grunt.registerMultiTask('pleeease', 'Postprocess CSS with ease', function () {
    var options = this.options();

    eachAsync(this.files, function (el, i, next) {

      eachAsync(el.src, function (file, i, next) {
        var dest = el.dest;

        if (!path.extname(dest)) {
          dest = path.join(dest, path.basename(file));
        }

        var result = pleeease.process(grunt.file.read(file), options);
        grunt.file.write(dest, result.css || result);
        next();
      }, this.async());

      next();
    }.bind(this), this.async());
  });
};
