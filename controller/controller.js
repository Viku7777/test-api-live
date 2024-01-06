const productModel = require("../model/user_schema.js");


const getController = async (req, res) => {
    try {
        var data = await productModel.find(req.query);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }

}
const postController = async (req, res) => {
    try {
        await productModel.create(req.body);
        res.status(200).send("post data");
    } catch (error) {
        res.status(400).send(error.name);
    }
}
const dltController = async (req, res) => {

    try {
        var data = await productModel.deleteOne(req.query);
        if (data.acknowledged) {
            res.status(200).send("deleted");
        } else {
            res.status(400).send("failed");
        }

    } catch (error) {
        res.status(400).send(error.name);

    }
}
const patchController = async (req, res) => {
    try {
        var data = await productModel.updateOne({ name: req.query }, { $set: req.body });
        if (data.acknowledged) {
            res.status(200).send("updated");
        } else {
            res.status(400).send("failed");
        }

    } catch (error) {
        res.status(400).send(error.name);

    }
}


module.exports = { getController, postController, dltController, patchController };
// {
//     "name":"vikrant",
//     "dob":"12/12/1999",
//     "intrest":["game"],
//     "gender":"male",
//     "phone":"8697488888",
//     "about":"hello i'm using dating app",
//     "title":"hello"

// }