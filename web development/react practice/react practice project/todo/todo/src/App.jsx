import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskManager from './TaskManager';

function App() {
  const [count, setCount] = useState(0)
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<TaskManager />);

  return (
    <>
      
    </>
  )
}

export default App
