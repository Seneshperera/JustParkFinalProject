import React from 'react'
import Navbar from './components/navbar.jsx'
import Body from './components/homebody.jsx'
const home = () => {
  return (
    <div className='bg-white h-screen max-w-screen-2xl'>
        <Navbar/>
        <Body/>
    </div>
  )
}

export default home
