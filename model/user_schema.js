const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,


    },
    dob: {
        type: String,
        required: true,
    },
    intrest: {
        type: Array,
        required: true,
    },
    gender: String,
    notificationTKN: {
        type: Array,
        required: false,
    },
    image: {
        type: Array,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("users", userSchema);