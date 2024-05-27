const protectRoute = require("../Middleware/ProtectRoute")
const MessageData = require("../Models/MessagesModel")
const Conversation = require("../Models/ConversationModel")



async function sendMessage(req,res) {

    try{
        const {message} = req.body

        const {id: receiverId} = req.params
    
        const senderId = req.user._id
    
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation)
            {
                conversation = await Conversation.create({
                    participants: [senderId, receiverId]
                })
            }

        const newMessage = new MessageData({
            senderId,
            receiverId,
            message
        })

        if(newMessage)
            {
                conversation.messages.push(newMessage._id)
            }

            await Promise.all([conversation.save(), newMessage.save()]);

            
        return res.json({msg : "msg sent successfully"})
   
    }

    catch(err)
    {
        console.log(err)
    }
    
}




async function getMessages(req,res) {

    try{

        const {id: userToChat} = req.params
    
        const senderId = req.user._id
    
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChat]}
        }).populate("messages")

        if(!conversation)
            {
                return res.json({msg: "msg not found"})
            }

            const messages = conversation.messages;

		    return res.status(200).json(messages)
    }

    catch(err)
    {
        console.log(err)
    }
    
}




module.exports = {
    sendMessage,
    getMessages
}