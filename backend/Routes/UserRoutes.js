const express = require("express")
const { getUsersForSidebar } = require("../Controller/UserController")
const protectRoute = require("../Middleware/ProtectRoute")
const router = express.Router()



router.get("/", protectRoute, getUsersForSidebar)




module.exports = router