import React, { useEffect } from 'react'

const ChildOne = ({call}) => {
    const value = "value from child one";
    useEffect(() => {
        call(value)
    }, [])
    
    return (
    <div>
        <h1>child one</h1>
    </div>
    )
}

export default ChildOne
