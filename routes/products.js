const express = require("express");
const router = express.Router();

const { getAllProduct, getAllProductTest } = require("../controller/products");

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProductTest);

module.exports = router;
