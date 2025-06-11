import React, { useContext } from 'react';
import { myContext } from './ParentContext'; // adjust path if needed
import {passingValue} from './ParentContext';

const ChildOneContext = () => {
  const { value, secondData} = useContext(myContext);

  return (
    <div>
      <h1>{value}</h1>
      <h1>{secondData}</h1>
      <h1>{passingValue}</h1>
    </div>
  );
};

export default ChildOneContext;
