/**
 * Elmentti egy villamos adatait az adatábzisba
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {
        console.log(req.body);
        if ((typeof req.body.tipus === 'undefined') ||
            (typeof req.body.palyaszam === 'undefined') ||
            (typeof req.body.forgalomba === 'undefined')) {
            return next();
        };

        console.log("Villamos létrehozása");
        res.redirect('/villamos/123');

        return next();
    };
};