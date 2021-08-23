const mongoose = require("mongoose")

const UserScema = mongoose.Schema({
    name:String,
    email: String,
    password: String,
    teacher: Boolean,
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const UserDetail = mongoose.model('User',UserScema)
module.exports = UserDetail;