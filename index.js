var express = require('express');
var app = express();

app.use(express.static('static'));

require('./routes/routing')(app);

var server = app.listen(3000, function() {
    console.log("On: 3000");
});