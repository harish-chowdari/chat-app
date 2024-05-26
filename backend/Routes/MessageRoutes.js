const express = require("express")
const { sendMessage } = require("../Controller/MessageController")
const protectRoute = require("../Middleware/ProtectRoute")
const router = express.Router()



router.post("/send-message/:id", protectRoute, sendMessage)








module.exports = router