import React from 'react';

const SearchInput = () => {
  return (
    <input 
      type="text" 
      placeholder="Search..." 
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
    />
  );
};

export default SearchInput;
