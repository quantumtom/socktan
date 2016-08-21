// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension.
        models:             'app/models',
        parts:              'app/parts',
        views:              'app/views',
        backbone:           'lib/backbone',
        bootstrap:          'lib/bootstrap',
        ga:                 'lib/ga',
        Handlebars:         'lib/handlebars',
        hbar:               'lib/hbars',
        jquery:             'lib/jquery',
        text:               'lib/text',
        twbs:               'lib/twbs',
        underscore:         'lib/underscore',
        validator:          'lib/validator'
    },
    shim: {
        backbone: {
            deps: ['underscore']
        },
        bootstrap: {
            deps: ['jquery']
        },
        Handlebars: {
            deps: ['bootstrap'],
            exports: 'Handlebars'
        },
        'jquery': {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        validator: {
            deps: ['jquery']
        }
    },
    hbars: {
        extension: '.hbar' // default = '.html'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['app/main'], function () {
    // Load js/app/main.js
});
