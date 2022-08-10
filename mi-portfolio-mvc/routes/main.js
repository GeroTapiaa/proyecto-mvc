const express = require("express");
const app = require("../app");
const router = express.Router()


const {home , about} = require("../controllers/mainController")
/* "/" */

app.get("/", home)
app.get("/about", about)


module.exports = router