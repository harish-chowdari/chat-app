import React from 'react';
import useConversation from '../Zustand/useConversation';

const Conversion = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div
      className={`flex items-center p-2 shadow-md rounded-lg ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-500 hover:text-white"}  transition duration-300 ease-in-out cursor-pointer`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="flex-shrink-0">
        <img
          src={conversation.profilePic}
          alt={`${conversation.fullName}'s profile`}
          className="h-8 w-8 rounded-full border-2 border-blue-500"
        />
      </div>

      <div className="ml-4">
        <p className={`text-lg font-semibold ${isSelected ? "text-white" : ""}`}>{conversation.fullName}</p>
      </div>
    </div>
  );
};

export default Conversion;
