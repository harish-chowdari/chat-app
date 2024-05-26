const mongoose = require("mongoose")



const MessagesData = mongoose.Schema(
    {
        senderId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserData",
            required: true
        },
        receiverId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserData",
            required: true
        },

        message : {
            type: String,
            required: true
        }
        
        
    },

	{ timestamps: true }
)


module.exports = mongoose.model("Messages", MessagesData)