/**
 * Kitöröl egy villamost az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {
        res.redirect('/villamos/123')
        return next();
    };
};