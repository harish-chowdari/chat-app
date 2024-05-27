const express = require("express")
const { sendMessage, getMessages } = require("../Controller/MessageController")
const protectRoute = require("../Middleware/ProtectRoute")
const router = express.Router()



router.post("/send-message/:id", protectRoute, sendMessage)


router.get("/get-message/:id", protectRoute, getMessages)





module.exports = router