const mongoose = require("mongoose")

const ConversationData = mongoose.Schema(
    {
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserData"

        }],

        messages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",
            default: []
        }]
        
    },

	{ timestamps: true }
)


module.exports = mongoose.model("Conversation", ConversationData)