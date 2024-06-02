import axios from 'axios'
import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'

const useLogout = () => {

    const {setAuthUser} = useAuthContext()


    const logout = ()=> {
        try
        {
            const res = axios.post("/api/auth/logout")
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        }
        catch(err)
        {
            console.log(err) 
        }
    }

  return {logout}
}

export default useLogout