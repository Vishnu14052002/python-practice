import React from 'react'
import { useState } from 'react'


const ClickEvent = () => {
    console.log("button is clicked")
}

const DivSubContent = () => {
    return (
        <p>This is my orginal content</p>
    )
}

const DivMainContent = () => {
    return (
        <p>This is my modified content</p>
    )
}


const Content = () => {
    const [count, setCount] = useState(DivSubContent);
  
    return (
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(DivMainContent)}>
          Increment
        </button>
        <button onClick={() => setCount(DivSubContent)}>
          Decrement
        </button>
        <button onClick={() => setCount("nu")}>
          Reset
        </button>
      </div>
    );
}

export default Content
