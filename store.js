var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/venice');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connection successful');
});

var contactSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    telephone: String
});

var Contact = mongoose.model('Contact', contactSchema );

module.exports = Contact;
