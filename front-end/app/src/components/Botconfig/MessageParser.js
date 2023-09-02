import React from 'react';
import ActionProvider from './ActionProvider';
const MessageParser = ({ ActionProvider, setState, createChatBotMessage }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      ActionProvider.handleHello(); // Call the action from ActionProvider
    }
  };

  return <div></div>;
};

export default MessageParser;
