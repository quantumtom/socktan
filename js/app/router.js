// Filename: router.js
define([
    'underscore',
    'backbone',
    'views/about',
    'views/contact',
    'views/work'
], function (_, Backbone, AboutView, ContactView, WorkView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'about': 'showAbout',
            'contact': 'showContact',
            'work': 'showWork',
            '*actions': 'showAbout'
        }
    });

    var start = function () {

        var app_router = new AppRouter();

        app_router.on('route:showAbout', function () {

            var aboutView= new AboutView();
            aboutView.render();

        });

        app_router.on('route:showContact', function () {

            var contactView = new ContactView();
            contactView.render();

        });

        app_router.on('route:showWork', function () {

            // Like above, call render but know that this view has nested sub views which
            // handle loading and displaying data from the GitHub API
            var workView = new WorkView();
            workView.render();

        });

        Backbone.history.start();
    };

    return {
        start: start
    };
});
