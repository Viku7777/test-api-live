const mongoose = require("mongoose");
const model = require("./model/product.js");
const connectDb = require("./database/connect.js");

require("dotenv").config();


const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
        var data = [
            {
                "name": "iphone 12",
                "brand": "Apple",
                "price": "800000",
                "category": "mobile",
            },
            {
                "name": "iphone 12",
                "brand": "Apple",
                "price": "800",
                "category": "mobile",
                "company": "apple"
            },
        ];

        await model.create(data);
    } catch (error) {
        console.log(error);
    }

};
start();
