


const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();
const api_routes = require("./routes/routes.js");

const PORT = process.env.PORT || 4500;


app.use(express.json());
app.use("/", api_routes);

const startServer = async () => {
    try {

        await mongoose.connect(process.env.MONGO_KEY + "/dating");
        await app.listen(PORT, () => { console.log("server is Live and port is ::: " + PORT); })
    } catch (error) {
        console.log(error);
    }
}

startServer();

