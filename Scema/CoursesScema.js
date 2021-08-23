const mongoose = require("mongoose")

const CoursesScema = mongoose.Schema({
    CourseName: String,
    MaxScore:Number,
    questions: Array,
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const CoursesDetail = mongoose.model('items',CoursesScema)
module.exports = CoursesDetail;