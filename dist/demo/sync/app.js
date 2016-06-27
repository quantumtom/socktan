var app = {
  baseUrl: 'https://weathersync.herokuapp.com/',
  xhr: {
    method: 'GET',
    contentType: 'application/json',
    async: true,
    dataType: 'jsonp'
  },
  request: {
    origin: {
      header: 'Access-Control-Allow-Origin',
      value: '*'
    },
    headers: {
      header: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Content-Range, Content-Disposition, Content-Description'
    },
    methods: {
      header: 'Access-Control-Allow-Methods',
      value: 'GET, PUT, POST, DELETE, OPTIONS'

    },
    ua: {
      header: 'Api-User-Agent',
      value: 'SocktanTest/1.1 (http://api.socktan.com; test@socktan.com) BasedOnTaboolaTest/1.0'
    }
  },
  transport: function(ep) {
    var xhttp = new XMLHttpRequest();
    var promise = new Promise(function (resolve) {

      setTimeout(function () {
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            app.response = this.response;

            resolve(this.response);
          }
        };

        if (xhttp.readyState === 0 || xhttp.readyState === 4) {
          xhttp.open(app.xhr.method, app.baseUrl + ep, app.xhr.async);

          xhttp.setRequestHeader(app.request.headers.header, app.request.headers.value);
          xhttp.setRequestHeader(app.request.ua.header, app.request.ua.value);
          xhttp.setRequestHeader(app.request.methods.header, app.request.methods.value);
          xhttp.setRequestHeader(app.request.origin.header, app.request.origin.value);

          xhttp.contentType = app.xhr.contentType;
          xhttp.responseType = 'text';
          xhttp.send(null);

        }

      }, 200);
    });

    return promise;
  },
  fixTemp: function (kelvin) {
    return Math.round(((kelvin - 273.15)*9/5)+32) + '&deg;F';
  },
  startShow: function () {
    app.response = JSON.parse(app.response);

    app.weather = app.response.weather[0];

    var iconEl = document.createElement('img');
    iconEl.src =  'http://openweathermap.org/img/w/' + app.weather.icon +'.png';

    document.getElementById('locationName').innerHTML = app.response.name;
    document.getElementById('temperature').innerHTML = app.fixTemp(app.response.main.temp);
    document.getElementById('icon').appendChild(iconEl);
    document.getElementById('conditions').innerHTML = app.weather.main;
  },
  getWeather: function () {
    var lat, lon;

    app.location = JSON.parse(app.response).location;

    lat = app.location.latitude;
    lon = app.location.longitude;

    app.transport('weather/' + lat + ',' + lon).then(app.startShow);
  },
  main: function () {
    // First, get the geographic coordinates record for this IP address block.
    // Then use the response to make a second call to get the weather.
    app.transport('ip').then(app.getWeather);
  }
};

app.main();
