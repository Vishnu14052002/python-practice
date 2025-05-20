
import './App.css'
import MyMovieList from './components/MovieCard'
import Home from './pages/Home';
import UsingUseState from './pages/UseState';
import Counter from './pages/Counter';
import { Routes, Route  } from 'react-router-dom';
import Favorites from "./pages/Favorites"
import Navbar from './pages/Navbar.jsx'




function App() {
  const number = 1;
  return (
    <>
    <div>
      <main>
      <Navbar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites  />} />
        </Routes>
      </main>
    </div>
    </>
  )
}



export default App
