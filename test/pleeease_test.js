'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('Pick proper css rules', function () {
  var actual = grunt.file.read('tmp/style.css');
  var expected = grunt.file.read('test/expected/style.css');
  assert.equal(actual, expected);
});

it('Pick proper css rules for multiple options', function () {
  var actual = grunt.file.read('tmp/style2.css');
  var expected = grunt.file.read('test/expected/style2.css');
  assert.equal(actual, expected);
});