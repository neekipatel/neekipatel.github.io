"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['js/app.js', 'js/analytics.js'],
      options: {
        bitwise   : true,
        boss      : false,
        browser   : false,
        debug     : false,
        devel     : true,
        eqnull    : false,
        es3       : false,
        esnext    : true,
        evil      : false,
        forin     : true,
        jquery    : false,
        laxbreak  : false,
        loopfunc  : false,
        moz       : false,
        noarg     : true,
        node      : true,
        nonew     : true,
        strict    : false,
        newcap    : false
      }
    },
    uncss: {
      dist: {
        files: {
          'neekipatel.css': ['index-dev.html']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'index.html': ['index-dev.html'],
        }
      }
    },
    concat: {
      js: {
        src: ['js/jquery.backstretch.min.js', 'js/app.js', 'js/analytics.js'],
        dest: 'neekipatel.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('default', ['jshint', 'concat', 'uncss', 'processhtml']);
};