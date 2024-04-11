/**
 * Kitöröl egy kocsiszínt az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {
        res.redirect('/kocsiszin');
        return next();
    };
};