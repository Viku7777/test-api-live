const express = require("express");
const routes = require("./routes/products.js");
const connectDb = require("./database/connect.js");
require("dotenv").config();

const app = express();

app.use(routes)

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(4500, () => { console.log("Connected") })
    } catch (error) {
        console.log(error);
    }

};
start();