const express = require("express");
const { getproduct, gettest } = require("../controller/products.js");
const routes = express.Router();

routes.route("/").get(getproduct);
routes.route("/test").get(gettest);

module.exports = routes;