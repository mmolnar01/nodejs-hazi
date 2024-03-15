var renderMw = require('../middleware/renderMw')

var getKocsiszinekMw = require('../middleware/kocsiszin/getKocsiszinekMw');
var getKocsiszinMw = require('../middleware/kocsiszin/getKocsiszinMw');
var delKocsiszinMw = require('../middleware/kocsiszin/delKocsiszinMw');
var saveKocsiszinMw = require('../middleware/kocsiszin/saveKocsiszinMw');

var getVillamosokMw = require('../middleware/villamos/getVillamosokMw');
var getVillamosMw = require('../middleware/villamos/getVillamosMw');
var delVillamosMw = require('../middleware/villamos/delVillamosMw');
var saveVillamosMw = require('../middleware/villamos/saveVillamosMw');


module.exports = function (app) {
    
    var objRepo = {};

    //Főoldal
    app.use('/',
        renderMw(objRepo, 'index'));

    //Kocsiszínek megjelenítése
    app.get('/kocsiszin',
        getKocsiszinekMw(objRepo),
        renderMw(objRepo, 'kocsiszinek'));

    //Új kocsiszín hozzáadása
    app.use('kocsiszin/new',
        saveKocsiszinMw(objRepo),
        renderMw(objRepo, 'kocsiszinform'));

    //Egy kocsiszín szerkesztése
    app.use('kocsiszin/edit/:kocsiszinid',
        getKocsiszinMw(objRepo),
        saveKocsiszinMw(objRepo),
        renderMw(objRepo, 'kocsiszinform'));

    //Kocsiszín törlése
    app.get('kocsiszin/del/:kocsiszinid',
        getKocsiszinMw(objRepo),
        delKocsiszinMw(objRepo));

    //Villamosok nézet egy adott kocsiszínnél
    app.get('villamos/:kocsiszinid',
        getKocsiszinMw(objRepo),
        getVillamosokMw(objRepo),
        renderMw(objRepo, 'villamosok'));

    //Új villamos hozzáadása egy kocsiszínhez
    app.use('/villamos/:kocsiszinid/new',
        getKocsiszinMw(objRepo),
        saveVillamosMw(objRepo),
        renderMw(objRepo, 'villamosform'));

    //Egy villamos szerkesztése
    app.use('/villamos/:kocsiszinid/edit/:villamosid',
        getKocsiszinMw(objRepo),
        getVillamosMw(objRepo),
        saveVillamosMw(objRepo),
        renderMw(objRepo, 'villamosform'));

    //Villamos törlése
    app.get('/villamos/:kocsiszinid/del/:villamosid',
        getKocsiszinMw(objRepo),
        getVillamosMw(objRepo),
        delVillamosMw(objRepo),
        renderMw(objRepo, 'villamosform'));
        
};