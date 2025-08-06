import React from 'react'
import Navbar from './components/navbar.jsx'
import Booking from './components/Driver/booking.jsx'

const home = () => {
  return (
    <div className='bg-white h-screen max-w-screen-2xl'>
        <Navbar/>
        <Booking/>
    </div>
  )
}

export default home
