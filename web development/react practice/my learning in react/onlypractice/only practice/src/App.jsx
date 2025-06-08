import { useState } from 'react'
import './App.css'
import { EnterTaskFun } from './EnterTask'
import ParentComponent from './passing values/ParentComponent'
import ViewTask from './ViewTask'
import Comp1 from './again passing values/Comp1'
import Counter from './counter/counter'
import RealTimeView from './counter/RealTimeView'
import Showhide from './counter/Showhide'
import Calc from './counter/Calc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <EnterTaskFun /> */}
    {/* <ParentComponent /> */}
    {/* <Comp1 /> */}
    {/* <Counter /> */}
    {/* <RealTimeView /> */}
    {/* <Showhide /> */}
    <Calc />
    
    </>
  )
}

export default App
