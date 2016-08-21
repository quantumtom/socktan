require([
    'controllers/about',
    'app/router',
    'lib/ga'
], function (About, Router) {

    About.start();

    Router.initialize();
});
