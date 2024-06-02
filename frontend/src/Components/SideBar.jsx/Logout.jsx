import React from 'react';
import useLogout from '../Hooks/useLogout';

const Logout = () => {

  const {logout} = useLogout()

  return (
    <div>
      <button onClick={logout} className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
        Logout
      </button>
    </div>
  );
}

export default Logout;
