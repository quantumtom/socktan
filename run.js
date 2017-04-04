var http = require('http');
var express = require('express');
var app = express();
var compress = require('compression');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(compress());

console.log('__dirname = ' + __dirname);

app.use('/', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('listening');}
);

app.post('/user/contact', function (req, res) {
    var mailOpts, smtpTrans;

    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "cornyn@gmail.com",
            pass: "vamsvsldztwsmjqr"
        }
    });

    //Mail options
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
        to: 'cornyn@gmail.com',
        subject: 'Website contact form',
        text: req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            res.render('contact', { title: 'socktan.com - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' });
        }
        //Yay!! Email sent
        else {
            res.render('contact', { title: 'socktan.com - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
        }
    });

});
