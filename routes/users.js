const express = require("express")
const users = require("../controllers/users.js")
const Route= express.Router();

Route.post("/signin",users.signin)
Route.post("/signup",users.signup)

module.exports=Route;