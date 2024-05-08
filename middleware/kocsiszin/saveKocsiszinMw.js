/**
 * Elmentti egy kocsiszín adatait az adatábzisba
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {

    const KocsiszinModel = requireOption(objectreposity, 'KocsiszinModel');

    return function (req, res, next) {
        console.log(req.body);
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.cim === 'undefined') ||
            (typeof req.body.dolgozok === 'undefined')) {
            return next();
        };

        if (typeof res.locals.kocsiszin === 'undefined') {
            res.locals.kocsiszin = new KocsiszinModel();
        }

        res.locals.kocsiszin.nev = req.body.nev;
        res.locals.kocsiszin.cim = req.body.cim;
        res.locals.kocsiszin.dolgozok = req.body.dolgozok;

        res.locals.kocsiszin.save()
        .then(() => {
            return res.redirect('/kocsiszin');
        })
        .catch((err) => {
            return next(err);
        })

        //console.log("Kocsiszin létrehozása");
        //res.redirect('/kocsiszin');
        //return next();
    };
};