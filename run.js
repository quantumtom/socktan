var http = require('http');
var express = require('express');
var app = express();
var compress = require('compression');
var bodyParser = require('body-parser');
var requestBody = {};
var Contact = require('./store.js');

app.use(compress());
console.log('__dirname = ' + __dirname);
app.use('/', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() { console.log('listening');});

app.post('/api/v1/contact', function (req) {
    requestBody = req.body;

    var newContact = new Contact(requestBody);

    newContact.save(function (err) {
        if (err) {
            return console.error(err);
        }
    });
});
