import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: '#333333',
    },
    chatButton: {
      backgroundColor: '#333333',
  },
  userMessageBox: {
    backgroundColor: '#333333',
  },   
  
  }
};

export default config;