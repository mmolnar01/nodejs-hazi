/**
 * Lekérdezi az összes villamos az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    const VillamosModel = requireOption(objectreposity, 'VillamosModel');
    return function (req, res, next) {
        if (typeof res.locals.kocsiszin === 'undefined') {
            console.log("Valami");
            return next();
        }
        VillamosModel.find({_telep: res.locals.kocsiszin._id})
        .then((villamosok) => {
            res.locals.villamosok = villamosok;
            return next();
        })
        .catch((err) => {
            return next(err);
        })
    };
};