function App() {
  "use strict";

  XMLHttpRequest.prototype.setHeaders = function () {
    var headers = [
      {
        header: 'Access-Control-Allow-Origin',
        value: '*'
      },
      {
        header: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Content-Range, Content-Disposition, Content-Description'
      },
      {
        header: 'Access-Control-Allow-Methods',
        value: 'GET, PUT, POST, DELETE, OPTIONS'
      },
      {
        header: 'Api-User-Agent',
        value: 'SocktanTest/1.2 (http://api.socktan.com; test@socktan.com) BasedOnSynacorTest/1.1'
      }
    ];

    var that = this;

    headers.forEach(function(c) {
      that.setRequestHeader(c.header, c.value);
    });

    return this;
  };

  XMLHttpRequest.prototype.connect = function (ep) {
    var that = this;

    setTimeout(function () {
      that.onreadystatechange = function () {
        if (this.readyState === that.DONE && this.status === 200) {
          that.data = this.response;
        }
      };
    }, 200);

    console.dir(that.data);

    if (this.readyState === 0 || this.readyState === 4) {
      this.open('GET', 'https://weathersync.herokuapp.com/' + ep, true);

      this.setHeaders();

      this.contentType = 'application/json';
      this.responseType = 'text';

      this.send(null);
    }

    return this;
  };

  var xhr = new XMLHttpRequest();

  function transport(ep) {
    return JSON.parse(xhr.connect(ep));
  }

  function getLocation() {
    return transport('ip').location;
  }

  function getWeather(location) {
    return transport('weather/' + location.latitude + ',' + location.longitude).weather[0];
  }

  function view(elID) {
    return document.getElementById(elID);
  }

  function fixTemp(kelvin) {
    return Math.round(((kelvin - 273.15) * 9 / 5) + 32) + '&deg;F';
  }

  this.go = function () {
    var iconEl = document.createElement('img');
    var location = getLocation();
    var weather = getWeather(location);

    iconEl.src = 'http://openweathermap.org/img/w/' + weather.icon + '.png';
    view('icon').appendChild(iconEl);

    view('locationName').innerHTML = location.name;
    view('temperature').innerHTML = fixTemp(weather.main.temp);
    view('conditions').innerHTML = weather.main;
  };
}

var myApp = new App();

myApp.go();
