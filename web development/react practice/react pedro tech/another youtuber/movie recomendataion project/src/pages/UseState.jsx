import { useState } from "react"

function UsingUseState(){

    const FirstContent = () =>{
        return(
            <h1>This is my first content</h1>
        )
    }

    const SecondContent = () =>{
        return(
            <h1>This is my second content</h1>
        )
    }

    const ThirdContent = () =>{
        return(
            <h1>This is my third content</h1>
        )
    }

    const [DefaultContent, UpdatedContent] = useState()
    return(
        <>
            <h1>use state</h1>
            <div>{DefaultContent}</div>
            <button onClick={() => UpdatedContent(SecondContent)}>Second content</button>
            <button onClick={() => UpdatedContent(FirstContent)}>third content</button>
        </>
    )
}

export default UsingUseState