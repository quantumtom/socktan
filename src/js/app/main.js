require([
  'controllers/home',
  'app/router'
], function (User, Home, Router) {

  localStorage.users = JSON.stringify(users);

  Home.start();

  Router.startRouting();
});
