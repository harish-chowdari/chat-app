import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white p-4 shadow-lg h-full flex flex-col justify-between">
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
