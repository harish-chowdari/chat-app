// /Hooks/useSendMessage.js
import useConversation from '../Zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
  const { selectedConversation, messages, setMessages } = useConversation();

  console.log(selectedConversation._id)
  const sendMessage = async (message) => {
    if (!selectedConversation) {
      console.error('No conversation selected');
      return;
    }


    try {
      const res = await axios.post(`/api/messages/send-message/${selectedConversation._id}/messages`, {
        message: message,
      });
      // Ensure to update messages in the store correctly
      setMessages((prevMessages) => [...prevMessages, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  return { sendMessage };
};

export default useSendMessage;
