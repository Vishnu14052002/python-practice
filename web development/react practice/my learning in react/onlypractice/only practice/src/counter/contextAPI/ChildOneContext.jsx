import React, { useContext } from 'react';
import { myContext } from './ParentContext'; // adjust path if needed


const ChildOneContext = () => {
  const { value } = useContext(myContext);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default ChildOneContext;
