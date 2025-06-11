import React from 'react';
import { useMessage } from './MessageContext';

function Receiver() {
  const { message } = useMessage(); // get the message

  return (
    <div>
      <h2>Receiver</h2>
      <p>Message: {message}</p>
    </div>
  );
}

export default Receiver;
