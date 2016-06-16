require([
  'controllers/about',
  'app/router'
], function (About, Router) {

  About.start();

  Router.startRouting();
});
