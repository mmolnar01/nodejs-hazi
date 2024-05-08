/**
 * Elmentti egy villamos adatait az adatábzisba
 */

const requireOption = require('../requireOption');

module.exports = function (objectreposity) {
    const VillamosModel = requireOption(objectreposity, 'VillamosModel');
    return function (req, res, next) {
        console.log(req.body);
        if ((typeof req.body.tipus === 'undefined') ||
            (typeof req.body.palyaszam === 'undefined') ||
            (typeof req.body.forgalomba === 'undefined')) {
            return next();
        };

        if (typeof res.locals.villamos === 'undefined') {
            res.locals.villamos = new VillamosModel();
        }

        res.locals.villamos.tipus = req.body.tipus;
        //res.locals.villamos.palyaszam = parseInt(req.body.ev, 10);
        res.locals.villamos.palyaszam = req.body.palyaszam;
        res.locals.villamos.forgalomba = req.body.forgalomba;
        res.locals.villamos._telep = res.locals.kocsiszin._id;

        return res.locals.villamos.save()
        .then(() => {
            return res.redirect(`/villamos/${res.locals.kocsiszin._id}`);
        })
        .catch((err) => {
            return next(err);
        })
    };
};