import React, { useState } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = () => {
    const [realValue, setRealValue] = useState("");
    
    const calBackFun = (value) => {
        setRealValue(value)
    }

    return (
    <div>
        <h1>parent component</h1>
        <ChildOne call = {calBackFun}/>
        <ChildTwo value = {realValue}/>
    </div>
    )
}

export default Parent
