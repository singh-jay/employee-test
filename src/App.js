import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import EmployeeList from './pages/employee'
import AddEmployee from './pages/employee/add'
import EditEmployee from './pages/employee/edit'

function App() {
  return (
    <div className='container'>
      <Router>
        <div className='col-md-12'>
          <h1 className='text-center' style={style}></h1>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/employees/:id/edit' element={<EditEmployee />} />
            <Route path='/employees/add' element={<AddEmployee />} />
            <Route path='/employees' element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

const style = {
  color: 'red',
  margin: '10px',
}

export default App
