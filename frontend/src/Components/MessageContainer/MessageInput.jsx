import React from "react";

const MessageInput = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-lg"
        placeholder="Type a message..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
