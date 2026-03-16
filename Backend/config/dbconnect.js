const { default: mongoose } = require("mongoose");
require('dotenv').config();

function dbconnect(){
    return mongoose.connect(process.env.DB_CONNECT)
}

module.exports = dbconnect;
