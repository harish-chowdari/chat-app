import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4">
        <Messages />
      </div>

      <div className="p-4 bg-gray-200">
        <MessageInput />
      </div>
      
    </div>
  );
}

export default MessageContainer;
