import React from 'react';

const ActionProvider = ({ setState, createChatBotMessage }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  return <div></div>;
};

export default ActionProvider;
