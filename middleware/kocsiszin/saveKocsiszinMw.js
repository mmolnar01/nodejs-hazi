/**
 * Elmentti egy kocsiszín adatait az adatábzisba
 */


module.exports = function (objectreposity) {
    return function (req, res, next) {
        console.log(req.body);
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.cim === 'undefined') ||
            (typeof req.body.dolgozok === 'undefined')) {
            return next();
        };

        console.log("Kocsiszin létrehozása");
        res.redirect('/kocsiszin');
        return next();
    };
};