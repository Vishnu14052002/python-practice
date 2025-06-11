import React from 'react';
import { useMessage } from './MessageContext';

function Sender() {
  const { setMessage } = useMessage(); // get the function to set message

  return (
    <div>
      <h2>Sender</h2>
      <input
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
    </div>
  );
}

export default Sender;
