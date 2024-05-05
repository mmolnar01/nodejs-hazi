/**
 * Lekérdezi az összes kocsiszínt az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {

    const KocsiszinModel = requireOption(objectreposity, 'KocsiszinModel');

    return function (req, res, next) {

        KocsiszinModel.find()
        .then((kocsiszinek) => {
            res.locals.kocsiszinek = kocsiszinek;
            return next();
        })
        .catch((err) => {
            return next(err);
        })

        

    };
};