import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../Zustand/useConversation';

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <TiMessages className="mx-auto text-gray-400" size={60} />
        <p className="mt-4 text-lg text-gray-600">Please select a chat to start messaging</p>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="p-1 m-0 bg-gray-100">
            <h2 className="text-lg font-semibold"><span className='text-green-800 underline'>To:</span> {selectedConversation.fullName}</h2>
          </div>
          <div className="flex-1 bg-white overflow-auto p-4">
            <Messages conversation={selectedConversation} />
          </div>
          <div className="p-4 bg-gray-200">
            <MessageInput conversation={selectedConversation} />
            
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
