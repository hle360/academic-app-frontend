import React from 'react'
import './App.css'
import StudentList from './components/students/StudentList'

function App() {
  return (
    <> 
      {/* Add header and footer here */}
      <div className="container">
        <StudentList />
      </div>
    </>
  )
}

export default App
