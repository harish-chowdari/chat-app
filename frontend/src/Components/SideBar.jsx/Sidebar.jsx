import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-1/5 bg-white p-4 shadow-lg h-screen flex flex-col justify-between">
      <div>
        <SearchInput />
        <div className="mt-4 overflow-y-auto">
          <Conversations />
        </div>
      </div>
      <div className="mt-4">
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
