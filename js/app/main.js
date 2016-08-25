require([
    'views/about',
    'app/router',
    'lib/ga'
], function (About, Router) {
    var about = new About();

    about.render();

    Router.initialize();
});
