'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('Pick proper css rules', function () {
  var actual = grunt.file.read('tmp/style.css');
  assert(/@media all{body{color:red}a{color:blue}}/.test(actual));
});
