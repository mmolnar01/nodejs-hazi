/*const VillamosModel = require('./models/villamos');

let egyVili = new VillamosModel();
egyVili.tipus="Ganz";
egyVili.palyaszam="1512";
egyVili.forgalomba="1972";
let output;
(async () => {
    output = await egyVili.save();
});
console.log(output);*/

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

//Routing betöltése
require('./routes/routing')(app);

app.use((err, req, res, next) => {
    res.end('Hiba');
    console.log(err);
});

var server = app.listen(3000, function() {
    console.log("On: 3000");
});