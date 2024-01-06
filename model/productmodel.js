const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    feature: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.7,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        default: "apple",
        enum: {
            values: ["apple", "samsung", "dell", "mi"]
        }
    }

});

module.exports = mongoose.model("products", schema);