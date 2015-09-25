/* jshint undef: true, unused: true */

(function () {

    'use strict';

    module.exports = function (grunt) {

        /**
         * Grunt Tasks and Configurations
         */
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {

            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                dev: {
                    files: [{
                        expand: true,
                        cwd: 'src/css',
                        src: ['style.css'],
                        dest: 'dist/css'
                    }]
                }
            },
            jshint: {
                options: {
                    reporter: require('jshint-stylish')
                },
                test: [
                    'src/js/*.js'
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
                dev: {
                    files: [
                        'src/*.html',
                        'src/css/*.css',
                        'src/js/*.js',
                        'Gruntfile.js'
                    ],
                    tasks: [
                        'copy:dev'
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

        grunt.registerTask('default', [
            'clean',
            'cssmin'
        ]);

        grunt.registerTask('test', [
            'jshint'
        ]);

    };

}());
