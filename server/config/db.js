  
const mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.DATABASEURL+':'+process.env.DATABASEPORT+'/'+process.env.DATABASE);
mongoose.Promise = global.Promise;

module.exports = mongoose;
