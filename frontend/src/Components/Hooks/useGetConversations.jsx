import axios from 'axios'
import React from 'react'

const useGetConversations = () => {

    const [conversations, setConversations] = React.useState([])

    const getConversations = async()=> {
        try
        {
            const res = await axios.get("/api/users")
            setConversations(res.data)

        }
        catch(err)
        {
            console.log(err)
        }
      }

    React.useEffect(() => {
      getConversations()
    }, [])
    

  return {conversations}
}

export default useGetConversations