import React from 'react';
import Conversion from './Conversion';
import useGetConversations from '../Hooks/useGetConversations';

const Conversations = () => {
  const { conversations } = useGetConversations();
  console.log('conv : ', conversations);

  return (
    <div className="space-y-1">
      {conversations.map((conversation) => (
        <Conversion 
          conversation={conversation} 
          key={conversation._id}
        />
      ))}
    </div>
  );
};

export default Conversations;
