/**
 * Lekérdezi egy kocsiszín adatatait az adatbázisból
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {

        KocsiszinModel.findOne(_)
        .then((kocsiszinek) => {
            res.locals.kocsiszinek = kocsiszinek;
            return next();
        })
        .catch((err) => {
            return next(err);
        })


        

        return next();
    };
};