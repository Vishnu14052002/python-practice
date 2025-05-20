import React from 'react'
import { useState } from 'react'


const Increment = (current) => {
    current = current+1;
    return current
}
const Decrement = (current) => {
    current = current-1;
    return current
}
const reset = (current) => {
    current = 0;
    return current
}



const Counter = () => {
    const [current,update] = useState(0)
  return (
    <div>
      <h1>this is my counter component</h1>
      <p>{current}</p>
      <button onClick = {() => update(Increment(current))}>increment</button>
      <button onClick = {() => update(Decrement(current))}>decrement</button>
      <button onClick = {() => update(reset(current))}>reset</button>
    </div>
  )
}

export default Counter
