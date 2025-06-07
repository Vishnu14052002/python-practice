import { useState } from 'react'
import './App.css'
import { EnterTaskFun, PassInputFunction } from './EnterTask'
import ParentComponent from './passing values/ParentComponent'
import ViewTask from './ViewTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EnterTaskFun />
    <ParentComponent />
    <ViewTask />
    <PassInputFunction />
    </>
  )
}

export default App
