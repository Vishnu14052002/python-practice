import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './HeaderComponents/MainHeader'
import SubHeader from './HeaderComponents/SubHeader'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  )
}

export default App
