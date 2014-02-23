"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('/Users/neekipatel/.aws.json'),
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
    },
    's3-sync': {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: 'www.neekipatel.com',
        headers: {
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },
      production: {
        files: [
          {
            root: __dirname,
            src: ['index.html', 'neekipatel.css', 'neekipatel.js', 'favicon.ico','images/*', 'fonts/*'],
            dest: '/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-s3-sync');

  grunt.registerTask('default', ['jshint', 'concat', 'uncss', 'processhtml', 's3-sync']);
};