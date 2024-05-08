/**
 * Kitöröl egy villamost az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    return function(req, res, next) {
        if (typeof res.locals.villamos === 'undefined') {
            return next();
        }

        return res.locals.villamos.deleteOne()
        .then(() => {
            console.log("Torles sikeres");
            return res.redirect(`/villamos/${res.locals.kocsiszin._id}`);
        })
        .catch((err) => {
            console.log("Torles sikertelen");
            return next(err);
        })
    };
};