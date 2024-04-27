const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kocsiszinek');

module.exports = mongoose;