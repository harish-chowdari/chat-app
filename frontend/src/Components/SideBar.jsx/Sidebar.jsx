import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white p-4 shadow-lg h-screen flex flex-col justify-between">
      <div>

        <SearchInput />
        
        <div className="mt-4">
          <Conversations />
        </div>

      </div>

      <div className="mt-4">
        <Logout />
      </div>

    </div>
  );
}

export default Sidebar;
