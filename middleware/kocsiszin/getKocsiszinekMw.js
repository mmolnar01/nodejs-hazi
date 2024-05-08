/**
 * Lekérdezi az összes kocsiszínt az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const KocsiszinModel = requireOption(objectrepository, 'KocsiszinModel');

    return function (req, res, next) {
        return KocsiszinModel.find({})
        .then((kocsiszinek) => {
            res.locals.kocsiszinek = kocsiszinek;
            return next();
        })
        .catch((err) => {
            return next(err);
        })
    };
};