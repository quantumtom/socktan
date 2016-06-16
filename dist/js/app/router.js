define('app/router', ['jquery'], function () {

  var routes = [
    {
      hash: '#about',
      controller: 'about'
    },
    {
      hash: '#reel',
      controller: 'reel'
    },
    {
      hash: '#contact',
      controller: 'contact'
    }
  ];

  var defaultRoute = '#about';
  var currentHash = '';

  function loadController(controllerName) {
    $('#main-spinner').toggleClass('active');

    require(['controllers/' + controllerName], function (controller) {
      controller.start();
    });
  }

  function hashCheck() {
    if (window.location.hash !== currentHash) {
      for (var i = 0, currentRoute; currentRoute = routes[i++];) {
        if (window.location.hash === currentRoute.hash) {
          loadController(currentRoute.controller);
        }
      }
      currentHash = window.location.hash;
    }
  }

  function startRouting() {
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(hashCheck, 100);
  }

  return {
    startRouting: startRouting
  };
});