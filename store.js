var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/venice');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connection successful');
});

var contactSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    serviceType: String,
    toc: Boolean
});

var Contact = mongoose.model('Contact', contactSchema );

module.exports = Contact;
