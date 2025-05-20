import { useState } from "react"

function Counter(){
    const [Timer,SetTimer] = useState(1)

    const Increase = () => {
        SetTimer(<h1>hello world</h1>)
    }

    return(
        <>
        <h1>counter</h1>
        <span>{Timer}</span>
        <button onClick={Increase}>counter</button>
        </>
    )
}

export default Counter