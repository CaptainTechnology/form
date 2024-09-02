
const mongoose = require("mongoose");

const userdata = new mongoose.Schema({
    name:{
        type:String
    },
    contact:{
        type:Number
    },
    email_address:{
        type:String
    },
    address:{
        type:String
    }


})

const User = mongoose.model("User", userdata);
module.exports = User;