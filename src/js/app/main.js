require([
  'controllers/home',
  'app/router'
], function (Home, Router) {

  Home.start();

  Router.startRouting();
});
