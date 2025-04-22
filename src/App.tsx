import React from 'react'
import Home from './Component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Navbar from './Component/Navbar'
import Hotels from './Component/Hotels'
import Bookings from './Component/Bookings'
import Flights from './Component/Flights'


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/flights' element={<Flights />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
