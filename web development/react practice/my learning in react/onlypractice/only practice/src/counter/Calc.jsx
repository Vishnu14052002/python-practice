import React, { useState } from 'react'

const Calc = () => {
    const [finalValue, setFinalValue] = useState()
    const [valueOne, setValueOne] = useState()
    const [valueTwo, setValueTwo] = useState()

    const handleValueOne = (e) => {
        setValueOne(e.target.value)
        console.log(e.target.value)
    }

    const handleValueTwo = (e) => {
        setValueTwo(e.target.value)
        console.log(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        console.log("add");
        console.log(Number(valueOne) + Number(valueTwo));
        setFinalValue(Number(valueOne) + Number(valueTwo))
    }

    return (
    <div>
        <h1>Calculator</h1>
        <form>
            <input onChange={handleValueOne}></input><br />
            <input onChange={handleValueTwo}></input><br /><br />
            <button onClick={handleAdd}>+</button>
            <button onClick={(e) => {e.preventDefault();setFinalValue(Number(valueOne) - Number(valueTwo))}}>-</button>
            <button onClick={(e) => {e.preventDefault();setFinalValue(Number(valueOne) * Number(valueTwo))}}>*</button>
            <button onClick={(e) => {e.preventDefault();setFinalValue(Number(valueOne) / Number(valueTwo))}}>/</button>
            <h1>{finalValue}</h1>
        </form>
    </div>
    )
}

export default Calc
