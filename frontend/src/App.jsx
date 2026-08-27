import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import About from './components/About.jsx';
import Movies from './components/Movies.jsx';
import Favorites from './components/Favorites.jsx';
import Navbar from './components/Navbar.jsx';
import background from './assets/background.jpg';

function App() {

  return (
    <>
      <div className='min-h-screen bg-cover bg-center bg-fixed'
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 20, 0.75), rgba(15, 15, 20, 0.75)), url(${background})`
        }}>
        <div className='body container mx-auto px-6'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
