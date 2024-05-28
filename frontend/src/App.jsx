import React from "react";
import Login from "./Pages/Login.jsx/Login";
import SignUp from "./Pages/SignUp/SignUp";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";


const App = () => {
  return <div>
  
  {/*<BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>*/}
    <Home />
    
  </div>;
};

export default App;
