const express = require("express")
const { signUp, logIn } = require("../Controller/AuthController")
const router = express.Router()



router.post("/signup", signUp)

router.get("/s", signUp)


router.post("/login", logIn)

module.exports = router