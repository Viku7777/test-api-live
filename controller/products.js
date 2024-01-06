const products = require("../model/product");

const getAllProduct = async (req, res) => {
    console.log(req.qurey);
    const mydata = await products.find(req.qurey);
    res.status(200).json({ mydata });
}


const getAllProductTest = async (req, res) => {
    console.log(req.qurey);
    res.status(200).json({ msg: "i am get All Products testing" });
}

module.exports = { getAllProduct, getAllProductTest };