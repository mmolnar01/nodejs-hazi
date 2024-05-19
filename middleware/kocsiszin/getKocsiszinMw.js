/**
 * Lekérdezi egy kocsiszín adatatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const KocsiszinModel = requireOption(objectrepository, 'KocsiszinModel');

    return function (req, res, next) {
        return KocsiszinModel.findOne({_id: req.params.kocsiszinid})
        .then((kocsiszin) => {
            res.locals.kocsiszin = kocsiszin;
            return next();
        })
        .catch((err) => {
            return next(err);
        })
    };
};