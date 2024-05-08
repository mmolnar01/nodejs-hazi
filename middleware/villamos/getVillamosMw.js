/**
 * Lekérdezi egy villamos adatatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const VillamosModel = requireOption(objectrepository, 'VillamosModel');
    return function (req, res, next) {

        return VillamosModel.findOne({_id: req.params.villamosid})
        .then((villamos) => {
            res.locals.villamos = villamos;
            console.log(res.locals.villamos)
            return next();
        })
        .catch((err) => {
            return next(err);
        })
    };
};