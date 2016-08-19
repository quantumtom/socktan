define('app/router', function () {

  var routes = [
    { hash: '#about',        controller: 'about'   },
    { hash: '#work',         controller: 'work'    },
    { hash: '#contact',      controller: 'contact' }
  ];

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

    window.location.hash = window.location.hash || routes[0].hash;
    window.setInterval(hashCheck, 100);
  }

  return {
    startRouting: startRouting
  };
});