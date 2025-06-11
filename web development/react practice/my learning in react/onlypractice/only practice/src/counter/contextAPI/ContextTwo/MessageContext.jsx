import React, { createContext, useContext, useState } from 'react';

// Create an empty box called MessageContext
const MessageContext = createContext();

// Create a component that will "provide" this context
export function MessageProvider({ children }) {
  const [message, setMessage] = useState(''); // this is your shared state

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

// Create a helper function so we can easily use the context
export function useMessage() {
  return useContext(MessageContext);
}
