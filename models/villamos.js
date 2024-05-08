const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Villamos = db.model('Villamos', {
    tipus: String,
    palyaszam: Number,
    forgalomba: String,
    _telep: {
        type: Schema.Types.ObjectId,
        ref: 'Kocsiszin'
    }
});

module.exports = Villamos;