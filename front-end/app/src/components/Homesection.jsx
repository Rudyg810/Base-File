import React, { useState } from 'react';
import { Chatbot, createChatBotMessage} from 'react-chatbot-kit';
import ActionProvider from './Botconfig/ActionProvider';
import 'react-chatbot-kit/build/main.css'
import MessageParser from './Botconfig/MessageParser';
import config from './Botconfig/config';

const MyComponent = () => {
  

  const [state, setState] = useState({
    messages: [],
  });

  // Function to add a new message to the state
  const addMessageToState = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      <h1>
        Ask me Anything
      </h1>
      <Chatbot
       style={{
        // Define your custom styles here
        
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        height:"10px"
      }}
      
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        state={state}
        setState={addMessageToState} // Pass the addMessageToState function
      />
    </div>
  );
};

export default MyComponent;
