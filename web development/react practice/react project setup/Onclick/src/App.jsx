import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllItems from './myitems/AllItems'
import UseState from './UseState/UseState'
import EntireUseState from './UseState/EntireUseState'
import FetchApi from './Fetch API/FetchApi'

function App() {

  return (
    <>
      <h1>Home Page</h1>
      {/* <AllItems /> */}
      {/* <UseState /> */}
      {/* <EntireUseState /> */}
      <FetchApi />
        
    </>
  )
}

export default App
