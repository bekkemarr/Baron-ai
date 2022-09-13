const express = require("express")
const router = express.Router()
const path = require("path")

const homecontroller = require(path.join(__basedir,"controllers/home.js"))

console.log(path.join(__basedir,"controllers/home.js"))
//CRUD
//any get request at root, point at this function renderhome
router.get("/",homecontroller.renderhome)

module.exports = router