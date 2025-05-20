import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display';



function App() {
  const [textValue, setTextValue] = useState('');

  const clickEvent = (event) => {
    event.preventDefault();
    console.log(textValue)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setTextValue(event.target.value);
  };


  return (
    <>
    <form>
      <input id='text' onChange={handleChange} type='text'/>
      <button onClick={clickEvent}>click me</button>
    </form>

    <Display name = {textValue}/>

    </>
    
  )
}

export default App
