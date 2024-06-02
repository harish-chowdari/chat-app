import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../Context/AuthContext';

const useLogin = () => {
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    try {
      const res = await axios.post('/api/auth/login', { userName, password });
      if(res.data.notCorrect)
        {
            toast.error("not correct")
            return
        }
    
        localStorage.setItem('chat-user', res.data._id);
        setAuthUser(res.data._id);
        toast.success('Login successful');

    } 
    
    catch (err) {
      console.error(err);
      toast.error('Login failed');
    }
  };

  return { login };
};

export default useLogin;
