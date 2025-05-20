import React, { useState } from 'react'
import UseState from './UseState'

const EntireUseState = () => {

    const VisibleUserInterface = (
        <>
        <h1>This is my visible User Interface</h1>
        </>
    );

    const ChangeuserInterface = (
        <h1>Changed user interface</h1>
    );

    const ButtonClick = () => {
        SetUserInterface(ChangeuserInterface)
    }

    const [UserInterface, SetUserInterface] = useState(VisibleUserInterface)
    return (
        <div>
            <button onClick={ButtonClick}>Click me to change</button>
            <div>{UserInterface}</div>
            <div>{UserInterface}</div>
            
            
        </div>
  )
}

export default EntireUseState
