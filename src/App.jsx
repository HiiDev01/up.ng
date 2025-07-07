import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Course from './pages/Course'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Course/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
