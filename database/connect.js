const mongoose = require("mongoose");

const connectWithDB = (url) => {
    return mongoose.connect(url)

};

module.exports = connectWithDB;