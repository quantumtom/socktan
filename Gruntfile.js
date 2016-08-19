(function () {

  'use strict';

  module.exports = function (grunt) {

    /**
     * Grunt Tasks and Configurations
     */
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        build: {
          expand: true,
          src: [
            'img/**',
            'demo/**',
            'fonts/**',
            'js/**/*.js',
            'js/app/parts/*.hbar'
          ],
          dest: 'dist'
        },
        all: {
          expand: true,
          src: [
            '*.html',
            'img/**',
            'css/**',
            'demo/**',
            'fonts/**',
            'js/**/*.js',
            'js/app/parts/*.hbar'
          ],
          dest: 'dist'
        },
        /**
         * Copies original source from src/js to build/js/src/js for source map debugging.
         */
        src: {
          files: [
            {
              expand: true,
              src: '*.js',
              dest: 'dist/js/src/js'
            }
          ]
        },
        other: {
          files: [
            {
              expand: true,
              src: [
                '.htaccess',
                'img/**',
                'cache.manifest',
                'favicon.ico'
              ],
              dest: 'dist/'
            }
          ]
        },
        js: {
          files: [
            {
              expand: true,
              src: '**',
              dest: 'dist/js'
            }
          ]
        }
      },
      cssmin: {
        build: {
          files: {
            'dist/css/main.css': ['css/*.css']
          },
          options: {
            sourceMap: false,
            shorthandCompacting: false,
            roundingPrecision: -1
          }
        },
        dev: {
          files: {
            'dist/css/main.css': ['css/*.css']
          },
          options: {
            sourceMap: true
          }
        }
      },
      htmlmin: {
        build: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.html': 'index.html'
          }
        }
      },
      jshint: {
        options: {
          reporter: require('jshint-stylish'),
          jshintrc: true
        },
        test: [
          'js/app/**/*.js',
          'Gruntfile.js'
        ]
      },
      clean: {
        dist: {
          src: [
            'dist/*'
          ]
        }
      },
      watch: {
        all: {
          files: [
            '**/*',
            'Gruntfile.js'
          ],
          tasks: [
            'default'
          ]
        },
        dist: {
          files: [
            '**/*'
          ],
          tasks: [
            'default'
          ]
        },
        dev: {
          files: [
            '**/*'
          ],
          tasks: [
            'dev'
          ]
        },
        js: {
          files: [
            'js/**/*.js'
          ],
          tasks: [
            'copy:js'
          ]
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /**
     * Alias tasks
     */

    grunt.registerTask('default', ['build']);

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('build', [
      'clean',
      'cssmin:dist',
      'htmlmin:dist',
      'copy:build',
      'test'
    ]);

    grunt.registerTask('dev', [
      'clean',
      'copy:all',
      'cssmin:dev',
      'test'
    ]);

    grunt.registerTask('test', [
      'jshint'
    ]);

  };

}());
