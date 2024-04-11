/**
 * Lekérdezi az összes villamos az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {

        res.locals.villamosok = [
            {
                _id: 'id1',
                tipus: 'Ganz GCSM1',
                palyaszam: '1301',
                forgalomba: '1967'
            },
            {
                _id: 'id2',
                tipus: 'Tatra T5C5',
                palyaszam: '4014',
                forgalomba: '1980'
            }
        ];

        return next();
    };
};