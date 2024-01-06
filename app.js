const express = require("express");
const database = require("./database/connect.js");
const app_routes = require("./routes/product");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4500;

app.use("/", app_routes);
const start = async () => {
    try {
        await database(process.env.MONGO_KEY + "/product");
        await app.listen(PORT, () => { console.log("server live Port is " + PORT); })
    } catch (error) {
        console.log(error);
    }
}
start();