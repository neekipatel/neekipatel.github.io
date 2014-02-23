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
    concat: {
      css: {
        src: ['css/bootstrap.min.css', 'css/font-awesome.min.css', 'css/main.css'],
        dest: 'neekipatel.css',
      },
      js: {
        src: ['js/jquery.backstretch.min.js', 'js/app.js', 'js/analytics.js'],
        dest: 'neekipatel.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['jshint', 'concat']);
};