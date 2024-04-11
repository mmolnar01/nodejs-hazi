/**
 * Lekérdezi egy kocsiszín adatatait az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {

        res.locals.kocsiszin = 
        {
            _id: 'id1',
            nev: 'Baross',
            cim: '8. ker',
            dolgozok: '123'
        };
        

        return next();
    };
};