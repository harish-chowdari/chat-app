import React from 'react'
import useConversation from '../Zustand/useConversation'
import axios from 'axios'



const useSendMessage = () => {

    const [messages, setMessages, selectedConversation] = useConversation()
    
    const sendMessage = async (message) => {
        try
        {
            const res = await axios.post(`/api/conversations/${selectedConversation._id}/messages`, {
                message: message
            })
            setMessages([...messages, res.data])
        }
        catch(err)
        {
            console.log(err)
        }

    }


  return {sendMessage}
}

export default useSendMessage