import React from 'react'
import { FaSearch } from "react-icons/fa";



const SearchInput = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-2 max-w-sm w-full">
        <input 
          type='text' 
          placeholder='Search' 
          className="flex-grow outline-none text-gray-700 bg-transparent"
        />
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  )
}

export default SearchInput