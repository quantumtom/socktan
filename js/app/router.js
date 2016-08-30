define([
    'underscore',
    'backbone',
    'views/about',
    'views/contact',
    'views/work'
], function (_, Backbone, AboutView, ContactView, WorkView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'about': 'showAbout',
            'contact': 'showContact',
            'work': 'showWork',
            '*actions': 'showAbout'
        },
        initialize: function (options) {
            this.appView = options.appView;
        }
    });


    function AppView() {

        this.showView = function (view) {
            if (this.currentView) {
                this.currentView.close();
            }

            this.currentView = view;
            this.currentView.render();

            $('#mainContent').html(this.currentView.el);
        };

    }

    var start = function () {

        var app_router = new AppRouter({
            appView: new AppView()
        });

        app_router.on('route:showAbout', function () {

            var aboutView = new AboutView();
            this.appView.showView(aboutView);
            //aboutView.render();

        });

        app_router.on('route:showContact', function () {

            var contactView = new ContactView();
            this.appView.showView(contactView);
            //contactView.render();

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
