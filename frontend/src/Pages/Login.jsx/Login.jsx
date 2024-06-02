import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../Components/Hooks/useLogin';

const Login = () => {
  const { login } = useLogin();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-6">
          <label className="block text-xl font-semibold mb-2" htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-6">
          <label className="block text-xl font-semibold mb-2" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-6 mt-4">
          <Link to="/">
            <p className="text-blue-600 hover:underline hover:cursor-pointer text-center">
              Don't have an account?
            </p>
          </Link>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
