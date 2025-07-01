import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('')

  const clickEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name_one: input1,
          name_two: input2,
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        alert('User saved successfully!');
      } else {
        alert('Error saving user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error.');
    }
  };
  

  return (
    <>
    <form>
      <input onChange={(e) => {setInput1(e.target.value)}}></input><br></br>
      <input onChange={(e) => {setInput2(e.target.value)}}></input><br></br>
      <button onClick={clickEvent}>submit</button>
    </form>
    </>
  )
}

export default App
