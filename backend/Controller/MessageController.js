const protectRoute = require("../Middleware/ProtectRoute")
const MessageData = require("../Models/MessagesModel")
const Conversation = require("../Models/ConversationModel")



async function sendMessage(req,res) {

    try{
        const {message} = req.body

        const {id: receiverId} = req.params
    
        const senderId = req.user._id
    
        console.log("message sent")

        
    }

    catch(err)
    {
        console.log(err)
    }
    
}




module.exports = {
    sendMessage
}