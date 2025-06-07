import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display';



function App() {
  const [inputValue, setInputValue] = useState('');  // track input live
  const [textValue, setTextValue] = useState('');    // track submitted value

  const clickEvent = (event) => {
    event.preventDefault();
    setTextValue(inputValue);
    console.log(inputValue)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }


  return (
    <>
    <form>
      <input onChange={handleChange} id='text' type='text'/>
      <button onClick={clickEvent}>click me</button>
    </form>

    <Display name = {textValue}/>

    </>
    
  )
}

export default App
