import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import Search from './search.jsx'
import Booking from './components/Driver/booking.jsx'
import Drivergateway from './Drivergateway.jsx'
import Driverpg from './components/Driver/Driverpg.jsx'
import BookS from './BookS.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Drivergateway" element={<Drivergateway />} />
        <Route path="/driverpg" element={<Driverpg />} />
        <Route path="/bookingsuccess" element={<BookS />} />
      </Routes>
    </div>
  )
}

export default App
