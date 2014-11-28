/*
 * grunt-pleeease
 * https://github.com/danielhusar/grunt-pleeease
 *
 * Copyright (c) 2014 Daniel Husar
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    //our task
    pleeease: {
      multiple: {
        options: {
          rem: ['12px'],
          mqpacker: true,
          minifier: false
        },
        files: {
          'tmp/': 'test/fixtures/*.css'
        }
      },
      single: {
        options: {
          rem: ['12px'],
          mqpacker: true,
          minifier: false
        },
        files: {
          'tmp/style.css': 'test/fixtures/style.css'
        }
      }
    },

    //test
    simplemocha: {
      test: {
        src: 'test/*.js'
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('default', ['clean', 'pleeease', 'simplemocha']);

};
