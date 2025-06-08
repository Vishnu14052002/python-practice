import React from 'react'
import Comp2 from './Comp2'

const Comp1 = () => {
    const getValue = (v) => {
        console.log(v);
    }
  return (
    <div>
      <h1> component 1</h1>
      <Comp2 getValuee = {getValue}/>
    </div>
  )
}

export default Comp1
