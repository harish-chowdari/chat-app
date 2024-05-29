import React from "react";
import Login from "./Pages/Login.jsx/Login";
import SignUp from "./Pages/SignUp/SignUp";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import {Toaster} from "react-hot-toast"

const App = () => {
  return <div>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/login" element={<Login />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
    {/*<Home /> */}
    
  </div>;
};

export default App;
