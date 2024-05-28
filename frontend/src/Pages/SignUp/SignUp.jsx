import React from "react";
import { Link } from "react-router-dom";
import CheckBoxes from "./CheckBoxes";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>

      <div className="w-full mb-6">
        <label className="block text-xl font-semibold mb-2" htmlFor="fullName">Full Name</label>
        <input id="fullName" type="text" className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500" />
      </div>

      <div className="w-full mb-6">
        <label className="block text-xl font-semibold mb-2" htmlFor="userName">User Name</label>
        <input id="userName" type="text" className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500" />
      </div>

      <div className="w-full mb-6">
        <label className="block text-xl font-semibold mb-2" htmlFor="password">Password</label>
        <input id="password" type="password" className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500" />
      </div>

      <div className="w-full mb-6">
        <label className="block text-xl font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500" />
      </div>

      <CheckBoxes />

      <div className="w-full mb-6 mt-4">
        <Link to="/login">
          <p className="text-blue-600 hover:underline hover:cursor-pointer text-center">
            Already have an account?
          </p>
        </Link>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;




/* 

const SignUp = () => {
  return (
    <div className="flex flex-col items-center mt-28 mb-10">
      <div>
        <h1 className="text-2xl">Full Name</h1>
        <input type="text" className="text-white bg-slate-500" />
      </div>

      <div>
        <h1 className="text-2xl">User Name</h1>
        <input type="text" className="text-white bg-slate-500" />
      </div>

      <div>
        <p className="text-2xl">Password</p>
        <input type="password" className="bg-slate-500 text-white " />
      </div>

      <div>
        <p className="text-2xl">Confirm Password</p>
        <input type="password" className="bg-slate-500 text-white " />
      </div>

      <CheckBoxes />

      <div>
        <Link to="/login">
          <p className="text-blue-600 hover:underline hover:cursor-pointer">
            Already have an account?
          </p>
        </Link>
      </div>

      <button className="hover:text-blue-700 ">Sign Up</button>
    </div>
  );
};

*/