import React from "react";
import Login from "./Pages/Login.jsx/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Navigate, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './Context/AuthContext'



const App = () => {

  const {authUser} = useAuthContext()

  return <div>
  
    <Routes>
    <Route path="/home" element= { authUser ? <Home /> : <Navigate to="/login"  /> } />
      <Route path="/" element={ authUser ? <Navigate to="/home" /> : <SignUp /> }/>
      <Route path="/login" element={ authUser ? <Navigate to="/home" /> : <Login /> } />
    </Routes>
    <Toaster />
    
  </div>;
};

export default App;
