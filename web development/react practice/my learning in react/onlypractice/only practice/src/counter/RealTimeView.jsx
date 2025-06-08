import React, { useState } from 'react'

const RealTimeView = () => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    }
    return (
    <div>
        <h1>real time view</h1>
        <input onChange={handleChange}></input>
        <p>{value}</p>
    </div>
    )
}

export default RealTimeView
