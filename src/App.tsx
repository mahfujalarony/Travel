import React from 'react'
import Home from './Component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Navbar from './Component/Navbar'


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
