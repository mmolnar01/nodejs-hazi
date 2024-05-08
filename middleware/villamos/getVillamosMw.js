/**
 * Lekérdezi egy villamos adatatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    const VillamosModel = requireOption(objectreposity, 'VillamosModel');
    return function (req, res, next) {

        VillamosModel.findOne({_id: req.params.villamosid})
        .then((villamos) => {
            res.locals.villamos = villamos;
            console.log(res.locals.villamos)
            return next();
        })
        .catch((err) => {
            return next(err);
        })

        return next();
    };
};