import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
