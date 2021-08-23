const express = require("express")
const courses = require("../controllers/Courses.js")
const Route= express.Router();
const middleware= require("../Middleware/user")

Route.get("/",courses.getCourses)
Route.post("/",courses.addCourse)
Route.post("/update",courses.updateCourse)
Route.post("/addScore",courses.addScore)

module.exports=Route;

