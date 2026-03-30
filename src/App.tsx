import React from 'react'
import './App.css'
import StudentList from './components/students/StudentList'
import Home from './components/Home'
import { BrowserRouter, Link, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className='navbar'>
        <Link className='nav-links' to="/">Home</Link> |{" "}
        <Link className='nav-links' to="/students">Students</Link> |{" "}
        <Link className='nav-links' to="/classes">Classes</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
