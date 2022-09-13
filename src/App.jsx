import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route index path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
