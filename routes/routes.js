const express = require("express");
var { getController, postController, dltController, patchController } = require("../controller/controller.js");

var routes = express.Router();

routes.route("/").get(getController);
routes.route("/").post(postController);
routes.route("/").patch(patchController);
routes.route("/").delete(dltController);
module.exports = routes;