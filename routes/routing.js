var renderMw = require('../middleware/renderMw')

var getKocsiszinekMw = require('../middleware/kocsiszin/getKocsiszinekMw')
var getKocsiszinMw = require('../middleware/kocsiszin/getKocsiszinMw')
var delKocsiszinMw = require('../middleware/kocsiszin/delKocsiszinMw')
var saveKocsiszinMw = require('../middleware/kocsiszin/saveKocsiszinMw')

var getVillamosokMw = require('../middleware/villamos/getVillamosokMw')
var getVillamosMw = require('../middleware/villamos/getVillamosMw')
var delVillamosMw = require('../middleware/villamos/delVillamosMw')
var saveVillamosMw = require('../middleware/villamos/saveVillamosMw')

var kocsiszinModeel = require('../models/kocsiszin')
var villamosModel = require('../models/villamos')