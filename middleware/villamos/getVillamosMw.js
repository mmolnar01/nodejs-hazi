/**
 * Lekérdezi egy villamos adatatait az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {

        res.locals.villamos = 
        {
            _id: 'id1',
            tipus: 'Tatra T5C5',
            palyaszam: '4014',
            forgalomba: '1980'
        };

        return next();
    };
};