import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>My home page</h1>
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default Home
