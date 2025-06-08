import React, { useEffect, useRef, useState } from 'react'

const Showhide = () => {
    const [value, setValue] = useState("content");
    const headingRef = useRef(null);
    const handleShow = () => {
        setValue("content")
    }
    const handleHide = () => {
        setValue("")
    }
    return (
    <div>
        <h1>show and hide</h1>
        <button onClick={handleShow}>show</button>
        <button onClick={handleHide}>hide</button>
        <h3 ref={headingRef} className='content'>{value}</h3>
    </div>
    )
}

export default Showhide
