import React, { useState } from 'react'

const CompTwo = () => {
    
    const [handleInput, setHandleInput] = useState("");
    const handleInputFun = (e) => {
        setHandleInput(e.target.value)
    }
    const getInput = () => {
        console.log("button clicked")
    }
    console.log(handleInput)

    return (
    <div>
        <input onChange={handleInputFun}></input>
        <button onClick={getInput}>submit</button>
    </div>
    )
}

export default CompTwo
