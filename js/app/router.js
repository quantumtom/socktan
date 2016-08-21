// Filename: router.js
define([
    'backbone',
    'views/about',
    'views/contact',
    'views/work'
], function (Backbone, AboutView, ContactView, WorkView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'about': 'showAbout',
            'contact': 'showContact',
            'work': 'showWork'
        }
    });

    var initialize = function () {

        var app_router = new AppRouter();

        app_router.on('route:showAbout', function () {

            // Call render on the module we loaded in via the dependency array
            var projectsView = new AboutView();
            projectsView.render();

        });

        app_router.on('route:showContact', function () {

            // Like above, call render but know that this view has nested sub views which
            // handle loading and displaying data from the GitHub API
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
        initialize: initialize
    };
});
