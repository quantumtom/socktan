const express = require('express');
const app = express();
const compress = require('compression');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(compress());

console.log('__dirname = ' + __dirname);

app.use('/', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('listening');}
);

app.post('/user/contact', function (req, res) {
    let mailOpts, smtpTrans;

    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "cornyn@gmail.com",
            pass: process.env.SMTP_PASS
        }
    });

    //Mail options
    mailOpts = {
        from: req.body.userName + ' &lt;' + req.body.userEmail + '&gt;', //grab form data from the request body object
        to: 'cornyn@gmail.com',
        subject: 'Website contact form',
        text: req.body.userMessage
    };

    console.log(req.body);

    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (!error) {
            //Yay!! Email sent
            response.render('contact', { title: 'socktan.com - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
        }
    });

});
