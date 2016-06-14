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
                php: {
                    cwd: 'src',
                    expand: true,
                    src: [
                        '*.php',
                        'lib/**'
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
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                dev: {
                    files: [{
                        expand: true,
                        cwd: 'src/css',
                        src: [
                            'style.css'
                        ],
                        dest: 'dist/css/style.css'
                    }]
                }
            },
            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'dist/home.html': 'src/home.html',
                        'dist/reel.html': 'src/reel.html',
                        'dist/talk.html': 'src/talk.html',
                        'dist/twitter.html': 'src/twitter.html'
                    }
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
            'cssmin',
            'copy:js',
            'copy:other'
        ]);

        grunt.registerTask('test', [
            'jshint'
        ]);

    };

}());
