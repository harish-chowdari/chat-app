const express = require("express")
const { signUp, logIn, logout } = require("../Controller/AuthController")
const router = express.Router()



router.post("/signup", signUp)


router.post("/login", logIn)

router.post("/logout", logout)




module.exports = router