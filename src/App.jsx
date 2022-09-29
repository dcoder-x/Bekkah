import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/services' element={<Services/>} />
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/Projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
