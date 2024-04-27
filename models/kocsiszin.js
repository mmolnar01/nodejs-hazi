const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Kocsiszin = db.model('Kocsiszin', {
    nev: String,
    cim: String,
    dolgozok: Number
});

module.exports = Kocsiszin;