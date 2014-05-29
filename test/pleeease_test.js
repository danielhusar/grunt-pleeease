'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('Pick proper css rules', function () {
  var actual = grunt.file.read('tmp/style.css');
  var expected = grunt.file.read('test/expected/style.css');
  assert.equal(actual, expected);
});
