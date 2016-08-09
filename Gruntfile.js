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
          cwd: 'src',
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
          cwd: 'src',
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
              cwd: 'src/js',
              expand: true,
              src: '*.js',
              dest: 'dist/js/src/js'
            }
          ]
        },
        other: {
          files: [
            {
              cwd: 'src',
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
              cwd: 'src/js',
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
            'dist/css/main.css': ['src/css/*.css']
          },
          options: {
            sourceMap: false,
            shorthandCompacting: false,
            roundingPrecision: -1
          }
        },
        dev: {
          files: {
            'dist/css/main.css': ['src/css/*.css']
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
            'dist/index.html': 'src/index.html'
          }
        }
      },
      jshint: {
        options: {
          reporter: require('jshint-stylish'),
          jshintrc: true
        },
        test: [
          'src/js/app/**/*.js',
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
            'src/**/*',
            'Gruntfile.js'
          ],
          tasks: [
            'default'
          ]
        },
        dist: {
          files: [
            'src/*'
          ],
          tasks: [
            'default'
          ]
        },
        dev: {
          files: [
            'src/*'
          ],
          tasks: [
            'dev'
          ]
        },
        js: {
          files: [
            'src/js/*.js'
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
      'copy:build'
    ]);

    grunt.registerTask('dev', [
      'clean',
      'copy:all',
      'cssmin:dev'
    ]);

    grunt.registerTask('test', [
      'jshint'
    ]);

  };

}());
