/**
 * Lekérdezi az összes kocsiszínt az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    return function (req, res, next) {

        res.locals.kocsiszinek = [
            {
                _id: 'id1',
                nev: 'Baross',
                cim: '8. ker',
                dolgozok: '123'
            },
            {
                _id: 'id2',
                nev: 'Hungária',
                cim: '8. ker',
                dolgozok: '234'
            }
        ];

        return next();
    };
};