import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
    <div>
        <h1>counter app</h1>
        <button onClick={handleClick}>increment</button>
        <h2>{count}</h2>
    </div>
    )
}

export default Counter
