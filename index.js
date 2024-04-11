var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

//Routing betöltése
require('./routes/routing')(app);

var server = app.listen(3000, function() {
    console.log("On: 3000");
});