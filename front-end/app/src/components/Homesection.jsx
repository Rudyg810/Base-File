import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from './Botconfig/ActionProvider';
import MessageParser from './Botconfig/MessageParser';
import config from './Botconfig/config';

const MyComponent = () => {
  const [state, setState] = useState({
    messages: [],
  });

  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        state={state}
        setState={setState}
      />
    </div>
  );
};

export default MyComponent;
