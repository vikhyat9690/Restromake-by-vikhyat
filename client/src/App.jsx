import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home'
import Success from './pages/Success'
import Notfound from './pages/Notfound'
import MenuGrid from './pages/MenuGrid'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/notfound' element={<Notfound/>}/>
        <Route path='/menu' element={<MenuGrid/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
