const UsersData = require("../Models/UserModel")


async function getUsersForSidebar(req,res) {
    const loggedInUser = req.user._id

    const chattingUsers = await UsersData.find({_id: { $ne: loggedInUser } }).select("-password")
    return res.json(chattingUsers)
}


module.exports = {
    getUsersForSidebar
}