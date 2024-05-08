/**
 * Lekérdezi egy kocsiszín adatatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {

    const KocsiszinModel = requireOption(objectreposity, 'KocsiszinModel');

    return function (req, res, next) {
        //console.log(req.params);
        return KocsiszinModel.findOne({_id: req.params.kocsiszinid})
        .then((kocsiszin) => {
            res.locals.kocsiszin = kocsiszin;
            console.log(res.locals.kocsiszin)
            return next();
        })
        .catch((err) => {
            return next(err);
        })
    };
};