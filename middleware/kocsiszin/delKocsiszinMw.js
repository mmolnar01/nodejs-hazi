/**
 * Kitöröl egy kocsiszínt az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    return function (req, res, next) {
        /*await sleep(1000)
        function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }*/

        console.log(res.locals.kocsiszin);
        if (typeof res.locals.kocsiszin === 'undefined') {
            console.log("Del Undefined");
            return next();
        }

        res.locals.kocsiszin.deleteOne()
        .then(() => {
            console.log("Torles sikeres");
            return res.redirect('/kocsiszin');
        })
        .catch((err) => {
            console.log("Torles sikertelen");
            return next(err);
        })

        res.redirect('/kocsiszin');
        return next();
    };
};