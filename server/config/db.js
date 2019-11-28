  
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_estudantes');
mongoose.Promise = global.Promise;

module.exports = mongoose;
