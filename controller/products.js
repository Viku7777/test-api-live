var product_schema = require("../model/productmodel.js")


const getproduct = async (req, res) => {
    console.log(req.query);

    // var data = [
    //     {
    //         "name": "iphone 12",
    //         "brand": "Apple",
    //         "price": "800000",
    //         "category": "mobile",
    //     },
    //     {
    //         "name": "iphone 12",
    //         "brand": "Apple",
    //         "price": "800",
    //         "category": "mobile",
    //         "company": "apple"
    //     },
    // ];
    // await product_schema.create(data);
    res.status(200).json({ "message": "this is a live api" });
}

const gettest = async (req, res) => {
    const data = await product_schema.find(req.query);
    res.status(200).json(data);
}

module.exports = { getproduct, gettest };