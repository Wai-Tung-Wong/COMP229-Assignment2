//businessContact.js Wai Tung Wong 301222578 2022-10-21

let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},

{
    collection:"contacts"
});

module.exports = mongoose.model('contact',contactModel);