import React, { useState } from 'react'
import ChildComponent from './ChildComponent';


const ParentComponent = () => {
  const [value,setValue] = useState("");

  const callBack = (message) => {
    setValue(message)
  }

  return (
    <div>
      <h1>parent component</h1>
      <ChildComponent call = {callBack}/>
      <p>{value}</p>
    </div>
    
  )
}

export default ParentComponent
