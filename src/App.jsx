import NavBar from './components/NavBar'
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites'

import './App.css'


function App() {
  return (
    <>
     <NavBar/>
     <main>
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favorites" element={<Favorites/>} />
        
       </Routes>
     </main>
    </>
  )
}

export default App
